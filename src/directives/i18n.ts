
import { PreferencesManager } from "../PreferencesManger";

export function translateText(englishText: string): string {
    let translatedText = englishText;
    const lang = PreferencesManager.loadValue("lang") || "en";
    if ((window as any).TM_translations[lang][englishText]) {
        translatedText = (window as any).TM_translations[lang][englishText]
    } else {
        console.log("PLAEASE TRANSLATE", englishText);
    }
    return translatedText;
}

export function translateTextNode(el: any) {
    const lang = PreferencesManager.loadValue("lang") || "en";
    if ((window as any).TM_translations === undefined) return;
    if ((window as any).TM_translations[lang] === undefined) return;

    for (let node of el.childNodes) {
        if (node.nodeType !== Node.TEXT_NODE) continue;
        var translatedText = translateText(node.data);
        if (translatedText !== node.data) {
            node.data = translateText(node.data);
        }
    }
}

export const $t = translateText;
