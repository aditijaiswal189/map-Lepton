import { useControl } from "react-map-gl";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox";

function DeckGLOverlay(props) {
  const overlay = useControl(() => new DeckOverlay(props));
  overlay.setProps(props);
  return null;
}
export default DeckGLOverlay;
