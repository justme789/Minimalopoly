export class Player{
    constructor(name, color){
        this.name = name
        this.owned = []
        this.money = 1000
        this.tile = 0
        this.turn = false
        this.color = color
        this.x = 0
        this.y = 0
    }
    get getMoney(){
        return this.money
    }
}