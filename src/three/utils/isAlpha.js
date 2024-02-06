function isAlpha(intersect, opacity) {
  intersect.children.forEach((item) => {
    if (item.type === "Mesh") {
      item.material.opacity = opacity;
    }
  });
}

export default isAlpha