export const conditionalRender = (condition, string, before = true) => {
    if (!condition) return "";

    return before
        ? `${string} ${condition}`
        : `${condition} ${string}`;
}
