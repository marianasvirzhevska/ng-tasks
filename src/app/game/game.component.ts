import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

interface Result {
    name: string,
    counter: number,
    date?: any,
};

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
    timer: number = 10;
    counter: number = 0;
    play = false;
    restart = false;

    interval;

    allResults: Result[] = [];

    constructor(public userService: UserService) { }

    ngOnInit(): void { }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            } else {
                const result = {
                    name: this.userService.name,
                    counter: this.counter,
                    date: Date.now(),
                }
                
                this.play = false;
                this.restart = true;
                this.allResults.push(result);
                this.allResults = this.sortResults(this.allResults).slice(0, 10);
                
                clearInterval(this.interval);
            }
        }, 1000)
    }

    startGame(): void {
        this.play = true;
        this.counter = 1;

        this.startTimer();
    }

    restartGame(): void {
        this.play = false;
        this.restart = false;
        this.timer = 10;
    }

    countClicks(): void {
        this.counter += 1;
    }

    setTimer(newTimer: number): void {
        this.timer = newTimer;
    }

    sortResults(results: Result[]): Result[] {
        return results.sort((a, b) => {
            if (a.counter < b.counter) {
                return 1;
            }
            if (a.counter > b.counter) {
                return -1;
            }
            return 0;
        })
    }
}
