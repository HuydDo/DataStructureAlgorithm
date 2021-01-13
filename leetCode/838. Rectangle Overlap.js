/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
     // check if gap been most left and least right
     let left = Math.max(rec1[0], rec2[0])
     let right = Math.min(rec1[2], rec2[2])
     
     // check if gap been largest min (Y) and smallest max (Y)
     let bottom = Math.max(rec1[1], rec2[1])
     let top = Math.min(rec1[3], rec2[3])
     
     return (left < right && bottom < top)
};