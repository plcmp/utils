
let overlays = [];
let zIndex = 100000;

export function addOverlay(overlay) {
    overlays.splice(overlays.length - 1, 0, overlay);
    zIndex += 1;
    overlay._oldZIndex = overlay.style.zIndex;
    overlay.style.zIndex = zIndex;
}

export function removeOverlay(overlay) {
    zIndex -= 1;
    overlay.style.zIndex = overlay._oldZIndex;
    const overlayIndex = overlays.indexOf(overlay);
    if (overlayIndex != -1) {
        overlays.splice(overlayIndex, 1);
    }
}

