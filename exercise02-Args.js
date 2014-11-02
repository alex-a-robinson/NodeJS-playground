args = process.argv;

args.splice(0, 2);

var sum = 0

for (var i = 0; i < args.length; i++) {
    sum += Number(args[i]);
}

console.log(sum)
