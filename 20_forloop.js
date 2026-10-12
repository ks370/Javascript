// for loop
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//nested for loop
for (let i = 0; index < 10; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 0; index < 20; j++) {
        console.log(`outer loop ${j}`)

        
    }
    
}
//break and continue
for (let index = 0; index < array.length; index++) {
    if(index==5){
        console.log("acheived 5"); // stop aftera achieving 5
        break
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index < array.length; index++) {
    if(index==5){
        console.log("acheived 5"); // conitnue skip the condiiton and continue exuiting the for loop 
        continue
    }
    console.log(`value of i is ${index}`);
}
