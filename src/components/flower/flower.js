const flowers = [
    {image: "/images/plantas3.svg", humidity: 10 },
    {image: "/images/plantas4.svg", humidity: 50 },
    {image: "/images/plantas5.svg", humidity: 80 },
    // {image: "/images/trace6.svg", humidity: 50 }

];

const getFlowerImage = (humidity) => {
    let closesFlower = flowers[0];
    for (let i = 0; i < flowers.length; i++) {
        if (Math.abs(flowers[i].humidity - humidity)< Math.abs(closesFlower.humidity - humidity)) {
            closesFlower = flowers[i];
        }
    }
    return closesFlower.image;
};
export default getFlowerImage;
