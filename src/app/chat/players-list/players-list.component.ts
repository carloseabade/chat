import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-players-list",
  templateUrl: "./players-list.component.html",
  styleUrls: ["./players-list.component.scss"],
})
export class PlayersListComponent implements OnInit {

  constructor(){
    const players : Array<Players> = [];
  }

  players = [
    {
      id: 1,
      name: "Player 1",
      checked: false
    },
    {
      id: 2,
      name: "Player 2",
      checked: false
    },
    {
      id: 3,
      name: "Player 3",
      checked: false
    },
    {
      id: 4,
      name: "Player 4",
      checked: false
    },
    {
      id: 5,
      name: "Player 5",
      checked: false
    },
    {
      id: 6,
      name: "Player 6",
      checked: false
    },
    {
      id: 7,
      name: "Player 7",
      checked: false
    },
    {
      id: 8,
      name: "Player 8",
      checked: false
    },
    {
      id: 9,
      name: "Player 9",
      checked: false
    },
  ];
  ngOnInit() {}

}

interface Players {
  id: number,
  name: String,
  checked: Boolean
}
