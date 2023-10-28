const abbrevs = [[" 1d ", " once daily "], [" 2d ", " twice daily "], [" 3d ", " three times daily "], [" 4d ", " four times daily "], [" aaa ", " affected area application "], [" ac ", " before meals "], [" ad ", " into right ear "], [" am ", " in the morning "], [" as ", " into left ear" ],
[" au ", " into both ears "], [" aud ", " apply as directed "], [" bid ", " twice a day "], [" b.i.d. ", " twice a day "], [" bp ", " blood pressure "], [" c ", " with "],
[" cap ", " capsule "], [" caps ", " capsules "], [" cf ", " with food "], [" d/c ", " discontinue "], [" dc ", "discontinue "], ["dy", "daily"], [" gtt ", " drop "], [" h ", " hour(s) "],
[" hr ", " hour(s) "], [" ha ", " headache "], [" hbp ", " high blood pressure "], [" hs ", " at bedtime "], [" ht ", "hypertension "], [" htn ", " hypertension "],
[" im ", " intramascularly "], [" inh ", " inhale "], [" ins ", " instill "], [" inj ", " inject "], [" iv ", " intravenously "], [" na ", " nausea "],
[" n&v ", " nausea and vomiting "], [" n/v ", " nausea and vomiting "], [" nv ", " nausea and vomiting "], [" od ", " into right eye "], [" os ", " into left eye "],
[" ou ", " into both eyes "], [" pm ", " in the evening "], [" po ", " by mouth "], [" pr ", " as needed "], [" prn ", " when needed "], [" q ", " every "],
[" qam ", " every morning "], [" qd ", " daily "], [" qdam ", " daily in the morning "], [" qdpm ", " daily in the evening "], [" qh ", " every hour "],
[" q12h ", " every 12 hours "], [" q2-3h ", " every two to three hours "], [" q24h ", " every 24 hours "], [" q2-4h ", " every two to four hours "],
[" q4h ", " every four hours "], [" q4-6h ", " every four to six hours "], [" q6h ", " every six hours "], [" qhs ", " every night "], [" qid ", " four times a day "], [" q.i.d. ", " four times a day "],
[" qod ", " every other day "], [" qpm ", " every evening "], [" qw ", " once a week "], [" r ", " rectally "], [" s ", " without "], [" sc ", " subcutaneously (under the skin) "],
[" sq ", " subcutaneously (under the skin) "], [" subq ", " subcutaneously (under the skin) "], [" sob ", " shortness of breath "], [" ss ", " one-half "],
[" stat ", " immediately "], [" sup ", " suppository "], [" supp ", " suppository "], [" susp ", " suspension "], [" syr ", " syringe "], [" t ", " take "],
[" tab ", " tablet "], [" tabs ", " tablets "], ["tid", "three times a day"], ["t.i.d.", "three times a day"], [" tud ", " take as directed "], [" tat ", " until all taken "], [" top ", " topically "], [" uad ", " use as directed "],
[" uat ", " until all taken "], [" ud ", " as directed "], [" ut ", " as directed "], [" vag ", " vaginally "], [" w/ ", " with "], [" w/o ", " without "],
[" wk ", " week "]];

document.getElementById("submit").onclick = function() {
    let orig = " " + document.getElementById("sig").value + " ";
    let temp;
    let currAbbr;

    for (let abbrev of abbrevs) {
        currAbbr = abbrev[0];
        if (orig.includes(currAbbr)) {
            temp = orig.split(currAbbr);
            orig = temp[0] + abbrev[1] + temp[1];
        }
    }
    
    let final = orig.toUpperCase().charAt(1) + orig.substring(2);

    document.getElementById("result").value = final.trim();
}