import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";

export class AdvancedEcosystems implements IProjectCard {
    public cost: number = 11;
    public nonNegativeVPIcon: boolean = true;
    public tags: Array<Tags> = [Tags.PLANT, Tags.MICROBES, Tags.ANIMAL];
    public cardType: CardType = CardType.AUTOMATED;
    public name: string = "Advanced Ecosystems";
    public text: string = "Requires a plant tag, a microbe tag, and an animal tag. Gain 3 victory points.";
    public requirements: undefined;
    public description: string = "Constructing functional, dynamic ecosystems requires many ingredients";
    public canPlay(): boolean {
        return true;
    }
    public play(player: Player, _game: Game) {
        if (player.getTagCount(Tags.PLANT) === 0 ||
            player.getTagCount(Tags.MICROBES) === 0 ||
            player.getTagCount(Tags.ANIMAL) === 0) {
            throw "Requires a plant tag, a microbe tag, and an animal tag";
        }
        player.victoryPoints += 3;
        return undefined;
    }
}