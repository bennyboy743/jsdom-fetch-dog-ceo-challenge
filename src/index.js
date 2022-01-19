// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', (e) => {
    
    console.log('DOM fully loaded and parsed');
    fetch(imgUrl)
    .then(res => res.json())
    .then(json => showDogs(json))

    fetch(breedUrl)
    .then(res => res.json())
    .then(json => addtoListDogs(json))
});

const  showDogs = (dogsArray) => {
    const dogImage = document.getElementById('dog-image-container')
    let imageTag = 0
    let dogImageArrays = dogsArray.message
    dogImageArrays.forEach(element => {
        imageTag = document.createElement('img')
        imageTag.src = element
        dogImage.append(imageTag)
    });
   
}


const filerBreeds = (dogsBreed) => {
    const breedsDropDown = document.getElementById('breed-dropdown')
    let breedLetter = breedsDropDown.value
    let firstLetterOfDogs = dogsBreed[0].charAt(0)
    if( breedLetter === firstLetterOfDogs) {
        return dogsBreed
    }
}

const addtoListDogs = (dogsArray) => {
    const dogBreeds = document.getElementById('dog-breeds')
    let breedOfDog = Object.keys(dogsArray.message)
    breedOfDog.forEach(elt => {
        const createli = document.createElement('li')
        createli.addEventListener('click', e => {
           e.target.style.color = "Red";
        })
        const allDogsBreed = elt.split(',')
        let matchedDogs = filerBreeds(allDogsBreed)
        if(matchedDogs){
            createli.classList = allDogsBreed
            createli.append(matchedDogs)
            dogBreeds.append(createli)
        }
    })
} 




