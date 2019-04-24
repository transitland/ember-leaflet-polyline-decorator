export function initialize(appInstance) {
  let emberLeafletService = appInstance.lookup("service:ember-leaflet");

  if (emberLeafletService) {
    emberLeafletService.registerComponent("polyline-decorator", {
      as: "polyline-decorator"
    });
  }
}

export default {
  initialize
};
