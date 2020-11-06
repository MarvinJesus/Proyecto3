import { Component, OnInit } from '@angular/core';
import * as Stomp  from 'stompjs';
import * as SockJS from 'sockjs-client';
import $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public stompClient = null;
  public socket = new SockJS('/gs-guide-websocket');
  constructor( ) { }
  connect() {
    this.stompClient = Stomp.over(this.socket);
    this.stompClient.connect({}, function (frame) {
      this.setConnected(true);
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/greetings', function (greeting) {
        this.showGreeting(JSON.parse(greeting.body).content);
      });
    });
  }
  setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
      $("#conversation").show();
    }
    else {
      $("#conversation").hide();
    }
    $("#greetings").html("");
  }
  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log("Disconnected");
  }
  run () {
    $("form").on('submit', (e)=> {
      e.preventDefault();
    });
    $( "#connect" ).click(()=> { this.connect(); });
    $( "#disconnect" ).click(()=> { this.disconnect(); });
    $( "#send" ).click(()=> { this.sendName(); });
  };
  sendName() {
    this.stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
  }

  showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
  }
  ngOnInit() {
    this.run ();
  }

}
