import { Roster40k, Create40kRoster } from "./roster40k.js";
import { Renderer40k } from "./renderer40k.js";
import { CreateAoSRoster } from "./rosterAoS.js";

function removeAllChildren(parent: Element | null): void {
  if (parent) {
    let first = parent.firstElementChild;
    while (first) {
      first.remove();
      first = parent.firstElementChild;
    }
  }
}

function cleanup(): void {
  const rosterTitle = document.getElementById('roster-title');
  removeAllChildren(rosterTitle);

  const rosterList = document.getElementById('roster-lists');
  removeAllChildren(rosterList);

  const forceUnits = document.getElementById('force-units');
  removeAllChildren(forceUnits);
}

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  cleanup();

  if (files) {
    // files is a FileList of File objects. List some properties.
    let output = [];
    for (let f of files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const re = e.target;
        if (re && re.result) {
          if (re.result) {
            // Skip encoding tag
            const xmldatastart = re.result.toString().indexOf(',') + 1;
            //console.log("XML Start: " + xmldatastart);
            const xmldata = window.atob(re.result.toString().slice(xmldatastart));
            let parser = new DOMParser();
            let doc = parser.parseFromString(xmldata, "text/xml");

            if (doc) {
              // Determine roster type (game system).
              let info = doc.querySelector("roster");
              if (info) {
                const gameType = info.getAttributeNode("gameSystemName")?.nodeValue;
                if (!gameType) return;

                const rosterTitle = document.getElementById('roster-title');
                const rosterList = document.getElementById('roster-lists');
                const forceUnits = document.getElementById('force-units');

                if (gameType == "Warhammer 40,000 8th Edition") {
                  let roster = Create40kRoster(doc);
                  if (roster) {
                    if (roster._forces.length > 0) {
                      const renderer: Renderer40k = new Renderer40k();
                      renderer.render(roster, rosterTitle, rosterList, forceUnits);
                    }
                  }
                }
                else if (gameType == "Warhammer 40,000: Kill Team (2018)") {
                  //alert("Kill Team not supported yet.");
                  let roster = Create40kRoster(doc, false);
                  if (roster) {
                    if (roster._forces.length > 0) {
                      const renderer: Renderer40k = new Renderer40k();
                      renderer.render(roster, rosterTitle, rosterList, forceUnits);
                    }
                  }
                }
                else if (gameType == "Age of Sigmar") {
                  let roster = CreateAoSRoster(doc);
                  if (roster) {
                    alert("Age of Sigmar display is not supported yet.");
                  }
                }
              }
            }
          }
        }
      }
      reader.readAsDataURL(f);
    }
  }
}

const finput = document.getElementById('roster-file');
if (finput) finput.addEventListener('change', handleFileSelect, false);
