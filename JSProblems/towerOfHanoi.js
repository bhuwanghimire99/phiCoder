function towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod) {
    if (n === 1) {
        console.log(`Move disk 1 from rod ${sourceRod} to rod ${destinationRod}`);
        return;
    }

    towerOfHanoi(n - 1, sourceRod, auxiliaryRod, destinationRod);
    console.log(`Move disk ${n} from rod ${sourceRod} to rod ${destinationRod}`);
    towerOfHanoi(n - 1, auxiliaryRod, destinationRod, sourceRod);
}

towerOfHanoi(3, 'A', 'C', 'B'); // 3 is num of disks