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
    timer = 10;
    counter = 0;
    play = false;
    restart = false;

    private interval;

    allResults: Result[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void { }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            } else {
                this.play = false;
                this.restart = true;

                this.saveResults();
                
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
        return results.sort((a, b) => b.counter- a.counter)
    }

    saveResults(): void {
        const result = {
            name: this.userService.name,
            counter: this.counter,
            date: Date.now(),
        }
        
        this.allResults.push(result);
        this.allResults = this.sortResults(this.allResults).slice(0, 10);
    }
}
