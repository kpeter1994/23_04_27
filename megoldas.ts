
function DiakInfo(nev: string, csoport: number, tipus: boolean) : string{
    let result = `${nev}[Team${csoport < 10 ? '0' : ''}${csoport}]`;

    if (tipus) {
        result += ' – Junior Frontend';
    } else {
        result += ' – Webprogramozó';
    }

    return result;
}

console.log(DiakInfo("Minta Márton", 8, true));



function SzovegesErtekeles(jegy: number): [string, string] {
    let szorgalom: string;
    let magatartas: string;

    switch (jegy) {
        case 5:
            szorgalom = "Példás";
            magatartas = "Példás";
            break;
        case 4:
            szorgalom = "Jó";
            magatartas = "Jó";
            break;
        case 3:
            szorgalom = "Változó";
            magatartas = "Változó";
            break;
        case 2:
            szorgalom = "Hanyag";
            magatartas = "Rossz";
            break;
        default:
            szorgalom = "Nincs értékelés";
            magatartas = "Nincs értékelés";
            break;
    }

    return [szorgalom, magatartas];
}

console.log(SzovegesErtekeles(2));

function HarommalOszthatokSzama(tomb: number[]): number {
    let harommalOszthatoSzamokSzama = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 === 0) {
            harommalOszthatoSzamokSzama++;
        }
    }
    return harommalOszthatoSzamokSzama;
}

const tomb = [10, 23, 12, 24, 31, 33, 42, 20];
const harommalOszthatoSzamokSzama = HarommalOszthatokSzama(tomb);

console.log(harommalOszthatoSzamokSzama);









function Nyeroszamok( mennyiseg : number, alsoHatar : number, felsoHatar : number){

    const generaltSzamok : number[] = []

    while (generaltSzamok.length < mennyiseg){
        const ujSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar)
        if (!generaltSzamok.includes(ujSzam)){
            generaltSzamok.push(ujSzam)
        }
    }

    return generaltSzamok
}


const nyeroszamok = Nyeroszamok(5,1,90)


console.log(nyeroszamok)























