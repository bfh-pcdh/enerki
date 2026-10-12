# Anleitung: enerKI für den Gebrauch vorbereiten
1. Laptop starten und einloggen (Passwort siehe 1Password).
2. Sicherstellen, dass der Laptop eine WLAN-Verbingung hat
3. Sicherstellen, dass das ANT+ Dongle am Laptop (bzw. Adapter) eingesteckt ist
4. Am Hometrainer das linke Pedal drehen, bis es blinkt. Damit wacht der Watt-Sensor (befindet sich im linken Pedal) aus dem Standby auf.
5. enerKI in Chrome starten (Shortcut auf dem Desktop), ansonsten [https://bfh-pcdh.github.io/enerki/](https://bfh-pcdh.github.io/enerki/) mit dem Chrome Browser aufrufen. Das Powermeter funktioniert nur mit Chrome, nicht mit Safari / Firefox / Edge oder anderen Browsern.
6. Schaltfläche "Powermeter verbinden" auswählen. `ANT USB-m Stick gekoppelt` auswählen. Wenn keine kompatiblen Geräte gefunden wurden, zurück zu Schritt 5.
7. Testen, ob alles funktioniert. Danach mit dem Button `⟲` für den/die ersten User*in zurücksetzen.
8. Hometrainer einstellen (Höhe Lenker, Höhe Sattel, Widerstand des Schwungrades)

## Problemlösungen
### Problem: Man tritt in die Pedale, aber enerki reagiert nicht
- Sicherstellen, dass der ANT+-Empfänger mit dem Laptop verbunden ist (optimalerweise mit einem eigenen Adapter)
- Sicherstellen, dass die Pedale aktiv sind (Lämpchen an der linken Pedale sollte leuchten). Um zu aktivieren: In die linke Pedale treten
- Wenn dies sichergestellt ist, Seite neu laden ([cmd] + [r]). Auf "Powermeter verbinden" klicken und dann `ANT USB-m Stick – gekoppelt` auswählen und "verbinden" klicken.

### Problem: enerKI generiert keine Antwort
- Sicherstellen, dass eine Internetverbindung besteht
- Sicherstellen, dass sich der Laptop im BFH-Netz befindet oder über OpenVPN Connect mit dem Netzwerk verbunden ist

### Problem: Es kommt eine rote Fehlermeldung "Es ist etwas schiefgegangen"
#### In der Fehlermeldung steht der ```status code 401```
- Klicke auf den Knopf "zurücksetzen" und gib ein gültiges Access-Token ein
#### Es steht ein anderer status code
- Stelle sicher, dass eine Internetverbindung besteht und OpenVPN Connect verbunden ist (falls sich der Rechner nicht im BFH-Netz befindet)
- Prüfe auf [https://bfh-pcdh.github.io/enerki/?settings=true](https://bfh-pcdh.github.io/enerki/?settings=true), ob das richtige Modell ausgewählt ist (und du das entsprechende Token eingegeben hast)
- Falls du keine Lösung findest: Kopiere die Fehlermeldung und schicke sie an heg2@bfh.ch.
#### Der Laptop ist NICHT im BFH-Netzwerk
- Falls enerKI extern zum Einsatz kommt, muss entweder auf [https://bfh-pcdh.github.io/enerki/?settings=true](https://bfh-pcdh.github.io/enerki/?settings=true) das Modell `MLMP (für extern)` ausgewählt sein, oder eine VPN-Verbindung mittels OpenVPN Connect (installiert und im Dock) hergestellt werden.

### Problem: Ich muss ein Access-Token eingeben, aber kenne keines
- Melde dich beim enerKI-Team!

2027-10-12 heg2@bfh.ch
