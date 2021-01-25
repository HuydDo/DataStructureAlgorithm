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
// overlap
// let rec1 = [0,0,2,2]
// let rec2 = [1,1,3,3]

// not overlap
// let rec1 = [0,0,1,1]
// let rec2 = [1,0,2,1]

//not overlap
let rec1 = [0,0,1,1]
let rec2 = [2,2,3,3]
let ans = (isRectangleOverlap(rec1, rec2))
ans ? console.log('overlap') : console.log('not overlap')

//given top right rec 1, bottom left rec 2
// overlap
// let tr = [2,2]
// let bl = [1,1]

// not overlap
let tr = [2,3]
let bl = [2,3]


var isRectangleOverlap2 = function (tr, bl){
  return (tr[0] > bl[0] && bl[0] < tr[0] && tr[1] > bl[1] && bl[1] < tr[1])    
}
let ans2 = (isRectangleOverlap2(tr,bl))
ans2 ? console.log('overlap') : console.log('not overlap')
