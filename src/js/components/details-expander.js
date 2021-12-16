class DetailsExpander {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector('summary');
        this.expandLabel = this.summary.innerText;
        this.collapseLabel = this.summary.dataset.collapseLabel 
            ? this.summary.dataset.collapseLabel
            : 'Collapse'; 

        // Move all of our content - except the summary element - into
        // a nested 'content' container.
        this.content = document.createElement('div');
        this.content.classList.add('content');
        [...this.el.children].forEach((item) => {
            if (item !== this.summary) {
              this.content.appendChild(item);
            }
        });
        el.appendChild(this.content);

        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }
  
    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = 'hidden';
        // Check if the element is being closed or is already closed
        if (this.isClosing || !this.el.open) {
            this.open();
        // Check if the element is being openned or is already open
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }
  
    shrink() {
        this.isClosing = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        // If we're currently animating, cancel it
        if (this.animation) {
            this.animation.cancel();
        }
        
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        
        this.animation.onfinish = () => this.onAnimationFinish(false);
        this.animation.oncancel = () => this.isClosing = false;
    }
  
    open() {
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() => this.expand());
    }
  
    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${this.content.offsetHeight}px`;
        
        // If there is already an animation running, cancel it
        if (this.animation) {
            this.animation.cancel();
        }
        
        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        this.animation.onfinish = () => this.onAnimationFinish(true);
        this.animation.oncancel = () => this.isExpanding = false;
    }
  
    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        // Reset styling
        this.el.style.height = this.el.style.overflow = '';
        // Adjust label
        this.summary.innerText = open ? this.collapseLabel : this.expandLabel;
    }
}

module.exports = DetailsExpander;
  
  