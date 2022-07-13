class Video{
    constructor(t,up,time1){
        this.title=t;
        this.uploader = up;
        this.time = time1;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} secs of ${this.title}!`);

    }
}
let vid1 = new Video("The lord of the rings", "IMDB Watch",50000);
vid1.watch();

let vid2 = new Video("Harry Potter", "Netflix",5000);
vid2.watch();

let arr =[];
arr.push(vid1);
arr.push(vid2);

console.log(arr);