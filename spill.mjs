//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(Velkommen);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("ikke trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => 
        GaaTil(oppgave9));
    
}

function scene2() {
    const nei = new Blocks.Text("vi sa ikke", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
    Actions.Clicknei, () => {
        GaaTil(oppgave6);
    }
}

function test() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt6 = new Blocks.Text("Jeg er kald på ørene mine og trenger noe på hodet! Det er noe som rimer på stue.", { style: "tekst", x: 300, y: 100, width: 250, height: 100 });
    const img7 = new Blocks.Image("lue.png", { x: 0, y: 0, width: 100, height: 100 });
    const img8 = new Blocks.Image("", { x: 0, y: 0, width: 100, height: 100 });
    const img9 = new Blocks.Image("", { x: 0, y: 0, width: 100, height: 100 });
}

function innledning() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt22 = new Blocks.Text("Hei, jeg heter Even. Og jeg heter Tyra, og vi er 5 år. Vi skal på eventyr. På veien vil vi få ulike spørsmål som jeg og Even trenger hjelp til å løse. Når utfordringen er gjennomført, får vi lov til å gå videre til neste stasjon. Lykke til!!", { style: "tekst", x: 10, y: 10, width: 500, height: 800 });
    const img23 = new Blocks.Image("bilder/evenogtyra.jpg", { x: 50, y: 90, width: 250, height: 200 });
    const sound24 = new Blocks.Sound("lyder/innledning.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound24.start();
    })
    
}



function oppgave1() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt6 = new Blocks.Text("Jeg er kald på ørene mine og trenger noe på hodet! Det er noe som rimer på stue.", { style: "tekst", x: 0, y: 0, width: 300, height: 50 });
    const img7 = new Blocks.Image("bilder/lue.png", { x: 100, y: 50, width: 100, height: 100 });
    const img8 = new Blocks.Image("bilder/hjelm.jpg", { x: 200, y: 50, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/hatt.png", { x: 300, y: 50, width: 100, height: 100 });
    const sound1 = new Blocks.Sound("lyder/sporsmal1.m4a", { loop: false, auto: false });

    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound1.start();
    })


    Actions.Click(img7, () => {
        //spill av applaus lyd
        //bildet skal bli grønt
        const img10 = new Blocks.Image("bilder/gronn.jpg", { x: 100, y: 50, width: 100, height: 100 })
        const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
    })

    Actions.Click(img8, () => {
        const img10 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 50, width: 100, height: 100 });
        const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();

        //spill av buzz lyd
        //bildet skal bli rødt
    })
    Actions.Click(img9, () => {
        const img10 = new Blocks.Image("bilder/rod.jpg", { x: 300, y: 50, width: 100, height: 100 });
        const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
        //spill av buzz lyd
        //bildet skal bli rødt


    })

}

function oppgave2() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt2 = new Blocks.Text("Oi, her var det en bekk! Hjelp oss å finne ut hva vi må gå over.", { style: "tekst", x: 150, y: 50, width: 300, height: 50 });
    const img3 = new Blocks.Image("bilder/bro.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const img4 = new Blocks.Image("bilder/do.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img5 = new Blocks.Image("bilder/ro.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound6 = new Blocks.Sound("lyder/sporsmal2.m4a", { loop: false, auto: false });

    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound6.start();
    })


    Actions.Click(img3, () => {
        //spill av applaus lyd
        //bildet skal bli grønt
        const img10 = new Blocks.Image("bilder/gronn.jpg", { x: 320, y: 150, width: 100, height: 100 })
        const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
    })

    Actions.Click(img4, () => {
        const img9 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
        const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();


        //spill av buzz lyd
        //bildet skal bli rødt
    })
    Actions.Click(img5, () => {
        const img9 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
        const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
        //spill av buzz lyd
        //bildet skal bli rødt
    })
}

function oppgave3() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Ånei! Her var det et stort vann, men heldigvis er det en båt og årer. Hvordan kommer vi oss over?", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/ro.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/bro.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const img10 = new Blocks.Image("bilder/do.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound11 = new Blocks.Sound("lyder/sporsmal3.m4a", { loop: false, auto: false });
   

    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound11.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();


    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img10, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}


function oppgave4() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Huff, det var tungt å ro, vi ble tørste!! Håper vi har husket å ta med oss ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/vann.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/sand.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img10 = new Blocks.Image("bilder/brannmann.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound11 = new Blocks.Sound("lyder/sporsmal4.m4a", { loop: false, auto: false });
    
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound11.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 80, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();


    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img10, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}
function oppgave5() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Nå er vi sultne! Vi må ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/spise.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/grise.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound11 = new Blocks.Sound("lyder/sporsmal5.m4a", { loop: false, auto: false });
    
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound11.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})

}

function oppgave6() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Hva er det vi ser!? Er det en ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/bjorn.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/orn.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img12 = new Blocks.Image("bilder/flodhest.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound13 = new Blocks.Sound("lyder/sporsmal6.m4a", { loop: false, auto: false });
    
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 80, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();


    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img12, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}

function oppgave7() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Hva må vi gjøre? Vi må legge oss ned og late som om vi er ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/sno.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img12 = new Blocks.Image("bilder/brod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound13 = new Blocks.Sound("lyder/sporsmal7.m4a", { loop: false, auto: false });
   
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 320, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();


    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img12, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}

function oppgave8() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Huff, det var nære på. La oss gå videre til den magiske ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/hekken.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/sekken.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const img12 = new Blocks.Image("bilder/bekken.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound13 = new Blocks.Sound("lyder/sporsmal8.m4a", { loop: false, auto: false });
   
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img12, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}

function oppgave9() {

    // Å gjøre: Gi bedre navn til alle tingene.
    
    const txt7 = new Blocks.Text("Vi går gjennom portalen i den magiske hekken og kommer til en ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/hule.jpg", { x: 200, y: 150, width: 110, height: 100 });
    const img9 = new Blocks.Image("bilder/kule.jpg", { x: 80, y: 150, width: 110, height: 100 });
    const img12 = new Blocks.Image("bilder/gule.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound13 = new Blocks.Sound("lyder/sporsmal9.m4a", { loop: false, auto: false });

    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 110, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 110, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})
Actions.Click(img12, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    //spill av buzz lyd
    //bildet skal bli rødt
})
}

function oppgave10() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("I hula bor det noen skumle ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/troll.jpg", { x: 80, y: 150, width: 100, height: 120 });
    const img9 = new Blocks.Image("bilder/skjold.jpg", { x: 200, y: 150, width: 100, height: 120 });
    const sound13 = new Blocks.Sound("lyder/sporsmal10.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 80, y: 150, width: 100, height: 120 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 120 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})

}

function oppgave11() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Men trollene er også snille. Vi er faktisk ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/venner.jpg", { x: 200, y: 150, width: 110, height: 100 });
    const img9 = new Blocks.Image("bilder/tenner.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound13 = new Blocks.Sound("lyder/sporsmal11.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound13.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 110, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})

}

function oppgave12() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Oi, har du sett!? Det er allerede mørkt!! Vi må skynde oss ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/hjem.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/slem.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound15 = new Blocks.Sound("lyder/sporsmal12.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound15.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 200, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})

}

function oppgave13() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Endelig hjemme, se hva mamma og pappa har ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/bake.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/smakt.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound15 = new Blocks.Sound("lyder/sporsmal13.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound15.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 80, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    //spill av buzz lyd
    //bildet skal bli rødt
})

}

function oppgave14() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const txt7 = new Blocks.Text("Det er en ...", { style: "tekst", x: 20, y: 10, width: 300, height: 50 });
    const img8 = new Blocks.Image("bilder/kake.jpg", { x: 320, y: 150, width: 100, height: 100 });
    const img9 = new Blocks.Image("bilder/smakt.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const img16 = new Blocks.Image("bilder/rake.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound17 = new Blocks.Sound("lyder/sporsmal14.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound17.start();
    })


Actions.Click(img8, () => {
    //spill av applaus lyd
    //bildet skal bli grønt
    const img2 = new Blocks.Image("bilder/gronn.jpg", { x: 320, y: 150, width: 100, height: 100 })
    const sound9 =new Blocks.Sound("lyder/riktigsvar.m4a",{ loop: false, auto: false})
        sound9.start();
})

Actions.Click(img9, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 200, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
    sound20.start();

    
})
Actions.Click(img16, () => {
    const img0 = new Blocks.Image("bilder/rod.jpg", { x: 80, y: 150, width: 100, height: 100 });
    const sound20 =new Blocks.Sound("lyder/feilsvar.m4a",{ loop: false, auto: false})
        sound20.start();
    
})
}

function hurra() {

    // Å gjøre: Gi bedre navn til alle tingene.

    const img18 = new Blocks.Image("bilder/hurra.jpg", { x: 80, y: 50, width: 300, height: 150 });
    const txt19 = new Blocks.Text("HURRA!!", { style: "hurraText", x: 80, y: 200, width: 1600, height: 1000 });
    const sound20 = new Blocks.Sound("lyder/hurra.m4a", { loop: false, auto: false });
    const speaker = new Blocks.Image("bilder/speaker.png", { x: 550, y: 10, width: 100, height: 100 });
    Actions.Click(speaker,()=>{
        sound20.start();
    })

}