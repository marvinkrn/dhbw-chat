# DHBW Chat

## Inhaltsverzeichnis
- [Allgemeine Informationen](#allgemeine-informationen)
- [Technologien](#technologien)
  * [Backend: Firebase](#backend-firebase)
  * [React Framework](#react-framework)
  * [Redux](#redux)
- [Zusammenarbeit über GitHub](#zusammenarbeit-über-github)
- [Features](#features)

## Allgemeine Informationen

Wir haben uns entschieden, unsere Chat-App im Stil von Discord zu gestalten, da Discord das erste Programm war, was uns in den Sinn kam und generell ein modernes Design besitzt. Die Icons haben wir vom Node-Package material-ui importiert, da es einfacher ist, als immer wieder eigene einzubinden. Dazu sollte die gesamte App ein responsives Design besitzen. Dies wurde durch den Einsatz von flexbox erreicht. Die App besteht aus zwei groben Abschnitten: Sidebar und Chat. Die Sidebar zeigt die Channel und den User an, während im Chat die Nachrichten angezeigt werden. Die Sidebar nimmt immer 20% des verfügbaren Platzes ein. Oben in der Sidebar wird das Logo dargestellt, daneben, über dem Chat, der Channelname, in welchem sich der Nutzer befindet und eine Infobox. Der Input befindet sich unten im Chat. Auf einen "Senden"-Button wurde bewusst verzichtet (bzw. auf die Darstellung des Buttons), um dem Design treu zu bleiben.

## Technologien
### Backend: Firebase
Nach einiger Recherche entschieden wir uns für Firebase als Backend. Firebase hat zwar den Nachteil ein Google-Produkt zu sein, aber dafür verschiedene Vorteile. Erstens ist es kostenfrei und stellt nicht nur eine gut strukturierte NoSQL-Datenbank zur Verfügung, sondern erlaubt auch einen einfachen Login über Google (und andere). Dazu hat Firebase auch kostenfreies Hosting, sodass wir unsere App sogar deployen konnten und so online darauf zugegriffen werden kann. Ein weiterer Vorteil ist, dass es zu Firebase viele Online-Quellen und Beispiele gibt, an denen wir uns orientieren konnten. Zuletzt können mit Firebase einfach auch zusätzliche Daten wie ein Zeitstempel, IDs für User und Channel und weitere Nutzerdaten übergeben werden. Firebase kann über npm installiert werden und ist recht einfach verständlich.

### React Framework
Wir haben uns für das Framework React entschieden, da es eines der verbreitetsten ist. Somit ist es gut, schon damit gearbeitet zu haben und es gibt auch hier einige Quellen, aus denen wir Infos und Hilfe erhalten konnten. React hat natürlich auch einige Vorteile: Es erstellt eigenständig eine komponentenbasierte Struktur für die App, es ist verhältnismäßig einfach zu lernen und kann durch JSX Markup-Code in JavaScript einbinden. So konnten wir unsere App Komponente für Komponente aufbauen. 

### Redux
Über Redux sind wir eher zufällig gestolpert. Redux ist ein State-Container und ein sehr mächtiges Werkzeug, dessen Kapazität sicher über das was wir verwendet haben hinaus geht. Für uns war es hilfreich, da wir durch React Redux schon bei der Erstellung der App einbinden konnten. Anschließen half uns Redux die Nutzerzustände zu erfassen und in sogenannten „Slices“ abzuspeichern. Einzelne Komponenten von React können Daten über Dispatcher in die Slices pushen und aus diesen „Data-Layers“ wieder über einen Selector auslesen. Die Daten sind somit in der ganzen App verfügbar, was uns geholfen hat, gerade weil der eingeloggte User in verschiedenen Komponenten eine Rolle spielt.
	
## Zusammenarbeit über GitHub
Die Zusammenarbeit lief über GitHub. Direkt zu Beginn pushten wir die App in den Master Branch und konnten so in unterschiedlichen Sub-Branches gleichzeitig an der App arbeiten. Wir hätten das Deployment auch über GitHub durchführen können und sogar eine CI/CD Pipeline nutzen können, was wir aber aufgrund des engen Zeitrahmens nicht umgesetzt haben.
	
## Features
Der Nutzer muss sich per Google einloggen und erreicht danach den Chat. Hier kann er einen der Channel betreten und darin Nachrichten verfassen oder einen eigenen Channel erstellen. Dieser Chat ist durch das Backend persistent. Ein Logout befindet sich beim Zahnrad neben dem Namen des Users. Dort befindet sich ebenfalls ein Button, der einen Darkmode aktiviert. Im Chat können sowohl Bilder als auch Emojis (z.B. ":)") gesendet werden. Zudem kann der Text fett markiert, kursiv geschrieben oder durchgestrichen werden (Markdown). Oben sieht der Nutzer den derzeitigen Channel und rechts beim Fragezeichen sind einige Infos über die Nutzung des Chats aufgelistet. Alle Menüs können über ESC oder mit der Maus geschlossen werden. Nachrichten werden mit der Enter-Taste abgeschickt. Die Nachrichten werden mit dem Usernamen und der Zeit, an der sie abgeschickt wurden versehen.
