
// require('./db/index')
// .then(() => {
//      User.findAll({
//             // where: {name: 'ARMEN'}, // karanq chgrenq, ardyunq@ nuyn@ klini
//             // attributes:['name', 'age'],
//             raw: true,
//             include: [{ // join
//                 attributes:['userId'],// man e galis  "userId" posts tablum
//                 model: Post,
//                 required: true, // equivalent to INER JOIN (default left outer join ( required: false))
//                 where: {name: 'bbb'} // filter inner joined table (above)
//             }]
//         })
// })