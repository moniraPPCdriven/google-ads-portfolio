// Google Ads Script: Budget Monitoring
<script>
function main() {
  var campaigns = AdsApp.campaigns()
    .withCondition("Status = ENABLED")
    .get();

  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor("YESTERDAY");
    if (stats.getCost() > 100) {
      Logger.log("⚠️ Campaign " + campaign.getName() + " exceeded daily budget!");
    }
  }
}
  </script>
