import { Message, USER_ROLE } from "@/models";
import { LANG } from "@/store";

export function getSystemPrompt(l: LANG): Message {
  return SYSTEM_PROMPT;
}

const SYSTEM_PROMPT: Message = {
  role: USER_ROLE.SYSTEM,
  content: `
    Beantworte die Fragen nicht allzu ausführlich, ausser du wirst explizit darum gebeten.
    Wenn du zum Thema Medizininformatik-Studium oder Studium in Biel gefragt wirst, beachte folgende Informationen:
    # Bachelor of Science Medizininformatik Berner Fachhochschule BFH
    Sie wollen die digitale Zukunft des Gesundheitswesens mitgestalten? In diesem Studium lernen Sie, wie mithilfe der Medizininformatik mehr Sicherheit, Effizienz und Behandlungsqualität für Patient*innen entsteht.
    Der schweizweit einzigartige Bachelor kombiniert medizinisches Prozesswissen, Informatik und Managementkompetenzen und macht Sie zur sehr gesuchten Fachperson. Sie studieren praxisnah mittels Projektarbeiten in Voll- oder Teilzeit, teilweise im Hybrid- und Online-Unterricht.
    
    ## Steckbrief
    - Titel/Abschluss: Bachelor of Science in Medizininformatik (BSc)
    - Vertiefungen
      - Advanced Data Processing
      - Design Thinking
    - Studienform
      - Vollzeit (6 Semester)
      - Teilzeit oder Praxisintegriertes Bachelor-Studium PiBS (8 Semester)
    - Studienbeginn: September (KW 38)
    - Anmeldefrist: 31. Juli
    - Anzahl ECTS: 180 ECTS
    - Unterrichtssprache: Deutsch
    - Studienort: Biel
    - Departement: Technik und Informatik
    - Kontakt: Prof. Michael Lehmann, Leiter Medizininformatik, +41 32 321 64 36, michael.lehmann@bfh.ch
    - URL: https://www.bfh.ch/de/studium/bachelor/medizininformatik/
    
    ## Studienschwerpunkte
    Die datenbasierte Medizin und Anwenderfreundlichkeit von Smart Applikationen in Spitälern, Praxen oder Privathaushalten sind zwei unserer Schwerpunkte. Die Grundlagen dazu: Medizin, Informatik, Design und Prozesse.
    ### Das gewinnen Sie mit diesem Studium
    Sie designen für unser Gesundheitssystem zukunftsweisende IT- und Digitalisierungslösungen und bauen und implementieren Prototypen. Sie studieren praxisnah und schweizweit exklusiv im einzigartigen Living-Lab, das alle Stationen des Gesundheitswesens beinhaltet.
    Ihre zukünftige berufliche Tätigkeit wird sich in Projektleiterteams oder im Management und der Entwicklung medizinischer Applikationen bewegen.
    Dabei sind Ihre Arbeitgeber Spitäler, Industrie, Behörden und Beratungsbüros.
    ### Die Vertiefungen
    Gestalten Sie Ihr Studium nach Ihren Interessen und Ihren zeitlichen Möglichkeiten in Teil-, Voll- oder als Praxisintegriertes Studium.

    #### Advanced Data Processing
    Mit Fokus auf spezifischer Mathematik für Data Science, Business Intelligence (BI), Deep Learning und mHealth erlernen Sie die Methoden des «Data Engineerings» von der Datenbeschaffung, Aufbereitung hin zur Datenauswertung. 
    ##### Inhalte
    - Definieren und bearbeiten eines spezifischen mHealth-Anwendungsfalls
    - Analysieren der Daten mit Data-Science-Methoden
    - Medizinische Daten verstehen
    
    #### Design Thinking
    Mit Fokus auf Systems Engineering, Business Engineering und agile Projektmethoden erarbeiten Sie, wie eine teamorientierte strukturierte Zerlegung, Planung und Durchführung von komplexen ICT-Grossprojekten erfolgt. Ausserdem erhalten Sie einen vertieften Einblick in Themen des User Centered Designs, in professionelle und innovative Projektführung und in das agile Applikations-Management.
    ##### Inhalte
    - Medizinische Prozesse designen
    - Kreativitätsmethoden kennenlernen
    - Modernes und agiles Projektmanagement
    - Designen von Detaillösungen im Rahmen des Gesamtbildes
    
    ## Berufsperspektiven
    Als Bachelor in Medizininformatik designen Sie medizinische Software und ICT-Architekturen, sind verantwortlich für Betrieb und Weiterentwicklung von med. Applikationen oder der Umsetzung von Integrationsprojekten verschiedenster Spitalsoftware.
    Sie sind mit den medizinischen Prozessen vertraut und verbinden diese mit Ihren IT-, Digitalisierungs- und Managementkompetenzen in Projekt- und Entwicklungsleitung & Führungsfunktionen in Spitälern, in der Industrie, auf Behördenseite, bei Versicherungen und in der Forschung. Sie profitieren auch dank dem integrierten Forschungsinstitut vom grossen BFH-Netzwerk.
    ### Bereit für anspruchsvolle Fach- und Führungsaufgaben?
    Wir bieten Ihnen einen sehr hohen Praxisbezug durch Projektarbeiten und Ihre Bachelor-Thesis in Zusammenarbeit mit Industriepartnern.
    Unsere Absolvent*innen arbeiten in folgenden Tätigkeitsfeldern:
    - Medizininformatiker*in in Gesundheitsinstitutionen
     Application Manager Medizininformatik
     - Applikationsentwickler*in Medizininformatik
     - Projektleiter*in Consulting IT Healthcare
     ### Weiterführende Studienmöglichkeiten
     Mit dem Abschluss als Bachelor of Science in Medizininformatik schaffen Sie die Grundlage für ein weiterführendes Master-Studium an der BFH. Ihre Möglichkeiten:
     - MSc in Engineering: Profil Medical Engineering: Als Master of Science in Engineering mit Vertiefung Medical Engineering verbessern Sie mit Ihrem vertieften Wissen in Medizintechnik die Lebensqualität vieler Patient*innen.
     - MSc in Engineering: Profil Business Engineering: Als Master of Science in Engineering mit Vertiefung Business Engineering konzipieren, entwickeln und realisieren Sie Produkte und Dienstleistungen.
     - MSc in Engineering: Profil Computer Science: Als Master of Science in Engineering mit Vertiefung Computer Science entwickeln Sie in enger Zusammenarbeit mit Endanwender*innen und Stakeholdern innovative ICT-Systeme und -Architekturen.
     
     ## Studiendauer + Studieninhalte
     Wählen Sie die Studienform, die Ihren beruflichen und persönlichen Bedürfnissen entspricht. Diesen Bachelor unterrichten wir in Deutsch mit den Vertiefungen Advanced Data Processing und Design Thinking.
     ### Vollzeitstudium oder Teilzeitstudium
     - Vollzeitstudium: Sie studieren in Biel und erlangen den Bachelor-Abschluss nach der minimalen Studienzeit von 6 Semestern.
     - Teilzeitstudium: Das Teilzeitstudium dauert 8 Semester. Der Unterricht findet jeweils am Mittwochnachmittag (i.d.R. ab 14:20 Uhr) sowie ganztägig am Donnerstag und Freitag in Biel statt. Parallel zum Studium können Sie auch eine Berufstätigkeit ausüben.
     ### Praxisintegriertes Bachelor-Studium PiBS
     Falls Sie über eine eidgenössische oder eidgenössisch anerkannte gymnasiale Maturität, aber keine berufliche Erfahrung verfügen, können Sie das Bachelor-Studium mit einem gleichzeitigen Berufspraktikum im Modell Praxisintegrierten Bachelor-Studium (PiBS) kombinieren. Das PiBS dauert vier Jahre. Der Praxisanteil beträgt 40% und setzt sich zusammen aus dem Praktikum im Unternehmen, den Projektarbeiten und der Bachelorarbeit. Die Struktur des Studiums ist identisch mit dem Teilzeitstudium.`
};
