import a1 from '../static/images/placeholder-avatars/art-hauntington-jzY0KRJopEI-unsplash.jpg';
import a2 from '../static/images/placeholder-avatars/julian-wan-2EdIX-O2lkI-unsplash.jpg';
import a3 from '../static/images/placeholder-avatars/mika-W0i1N6FdCWA-unsplash.jpg';
import a4 from '../static/images/placeholder-avatars/fran-XxkTaY1UpZU-unsplash.jpg';
import a5 from '../static/images/placeholder-avatars/julian-wan-WNoLnJo7tS8-unsplash.jpg';
import a6 from '../static/images/placeholder-avatars/mulyadi-KLSPw4TTXSY-unsplash.jpg';
import a7 from '../static/images/placeholder-avatars/giorgio-encinas-n34dhlh0spw-unsplash.jpg';
import a8 from '../static/images/placeholder-avatars/leio-mclaren-L2dTmhQzx4Q-unsplash.jpg';
import a9 from '../static/images/placeholder-avatars/mulyadi-kL4coQHVj_A-unsplash.jpg';

export const avatarSet = [
    a1, a2, a3, a4, a5, a6, a7, a8, a9
];

const usedAvatars = new Set(); 

function getRandomInt(max) {
    return Math.round(Math.random() * max); // it's important to use 'round' and not 'floor'
}

export function getRandomAvatarPath() {
    if (usedAvatars.size > 8) {
        usedAvatars.clear();
    }

    const guessedSet = new Set(); 

    let i = getRandomInt(8); 
    let path = avatarSet[i]; 
    guessedSet.add(i); 

    while (usedAvatars.has(i)) {
        if (guessedSet.size > 8) {
            break; 
        }

        i = getRandomInt(8); 
        path = avatarSet[i]; 
        guessedSet.add(i); 
    }

    usedAvatars.add(i); 

    return path;
}