const PlResizeableMixin = (baseElement) => class ResizableElement extends baseElement {
    connectedCallback() {
        super.connectedCallback();
        this.dispatchEvent(new CustomEvent('resize-notify-required', {
            bubbles: true,
            composed: true,
            detail: {
                cb: () => this.reactToResize()
            }
        }
        ));
    }

    reactToResize() {
    }
};

export default PlResizeableMixin;
