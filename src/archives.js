import { NameToNumberMappings } from "../Utils/Data";
import { WebServer } from "../Utils/Selectors_And_PlaceHolders";
import { Single_Archive_Html } from "../Html_Templates/Archives_Single_Archive_Html";
import { applyPlaceholder, insertInnerHtml } from "../Utils/General_Utils";
import { Selectors, Placeholders } from "../Utils/Selectors_And_PlaceHolders";

const archivePlaceholders = Placeholders.Archives;
const volumes = Object.keys(NameToNumberMappings);
const baseUrl = "../issue";
console.log(volumes);
const volumesHtml = volumes
  .map((el) => {
    let tempArchive = Single_Archive_Html;

    tempArchive = applyPlaceholder(
      tempArchive,
      archivePlaceholders.volume_name,
      `${el}`
    );

    console.log(`replacing ${archivePlaceholders.volume_name} with ${el}`);

    const archiveLink = `${baseUrl}?site=nla&issue=${el.replace(/ /g, "")}`;
    tempArchive = applyPlaceholder(
      tempArchive,
      archivePlaceholders.issue_href,
      archiveLink
    );
    return tempArchive;
  })
  .join(" ");

insertInnerHtml(Selectors.Archives.Container, volumesHtml);
