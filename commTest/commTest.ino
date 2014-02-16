
/*
  Web client
 
 This sketch connects to a website (http://www.google.com)
 using an Arduino Wiznet Ethernet shield. 
 
 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 
 created 18 Dec 2009
 by David A. Mellis
 modified 9 Apr 2012
 by Tom Igoe, based on work by Adrian McEwen
 
 */
#include <LiquidCrystal.h>
#include <SPI.h>
#include <Ethernet.h>

  LiquidCrystal lcd(3, 5, 6, 7, 8, 9);
  int counter;
// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:
byte server[] = { 107,170,7,172 };  // numeric IP for Google (no DNS)
//char server[] = "107.170.7.172";    // name address for Google (using DNS)

// Set the static IP address to use if the DHCP fails to assign
IPAddress ip(192,168,0,177);

// Initialize the Ethernet client library
// with the IP address and port of the server 
// that you want to connect to (port 80 is default for HTTP):
EthernetClient client;

void setup() {
 // Open serial communications and wait for port to open:
  Serial.begin(9600);
   while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }
  
  // start the Ethernet connection:
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    // no point in carrying on, so do nothing forevermore:
    // try to congifure using IP address instead of DHCP:
    Ethernet.begin(mac, ip);
  }
  // give the Ethernet shield a second to initialize:
  //delay(1000);
  lcd.print("Commodisense 1.3\n");
  delay(250);
  for (int x=0; x<12;x+=1){
    lcd.setCursor(x, 0);  
    lcd.print(".");
    delay(350);
    }
    
  lcd.clear();
  lcd.setCursor(0,1);
  Serial.println("connecting...");
   while(true) {
      // if you get a connection, report back via serial:
      if (client.connect(server, 80)) {
        lcd.clear();
        lcd.setCursor(0,1);
        lcd.print("connected");
        // Make a HTTP request:
        client.println("GET /ardy/coffee HTTP/1.1");
        client.println("Host: 107.170.7.172");
        client.println("Connection: close");
        client.println();
        if (client.available()) {
          char c = client.read();
        
          if (counter == 7){
            lcd.clear();
          }
          if (counter == 8){
      //lcd.clear();
          delay(100);
      
          lcd.print(c);
          Serial.print(c);
        }
        if (c == '\n') {
          counter = counter + 1;
          Serial.print(counter);
          if (counter == 8){
            lcd.print("CFFE:$");
          }
          }
        }
      } 
      else {
        // kf you didn't get a connection to the server:
        Serial.println("connection failed");
      }
   }
}

void loop()
{
  // if there are incoming bytes available 
  // from the server, read them and print them:
  //int counter = 0;
  if (client.available()) {
    char c = client.read();
    
    if (counter == 7){
      lcd.clear();
    }
    if (counter == 8){
      //lcd.clear();
      delay(100);
      
      lcd.print(c);
      Serial.print(c);
    }
    if (c == '\n') {
      counter = counter + 1;
      Serial.print(counter);
      if (counter == 8){
        lcd.print("CFFE:$");
        
      }
    }
    delay(10);

   //if the server's disconnected, restart the client
    if (!client.connected()) {
      if (client.connect(server, 80)) {
        //lcd.clear();
        //lcd.setCursor(0,1);
        lcd.print("re-connected");
       //Make a HTTP request:U  
        client.println("GET /ardy/coffee HTTP/1.1");
        client.println("Host: 107.170.7.172");
        client.println("Connection: close");
        client.println();
      }
    }
  //
    
  //}
  
    // do nothing forevermore:
  }    //while(true);
}
void refreshGlobal(){
  
  if (client.connect(server, 80)) {
    //lcd.clear();
    //lcd.setCursor(0,1);
    //lcd.print("connected");
     //Make a HTTP request:
    client.println("GET /ardy/coffee HTTP/1.1");
    client.println("Host: 107.170.7.172");
    client.println("Connection: close");
    client.println();
    //lcd.setCursor();
  }
}
  
