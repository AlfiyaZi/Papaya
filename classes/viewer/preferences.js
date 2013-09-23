
var papaya = papaya || {};
papaya.volume = papaya.volume || {};



papaya.viewer.Preferences = papaya.viewer.Preferences || function () {
    this.showCrosshairs = papaya.viewer.Preferences.DEFAULT_SHOW_CROSSHAIRS;
    this.atlasLocks = papaya.viewer.Preferences.DEFAULT_ATLAS_LOCKS;

    this.readPreferences();
}


papaya.viewer.Preferences.COOKIE_PREFIX = "papaya-";
papaya.viewer.Preferences.COOKIE_EXPIRY_DAYS = 365;

papaya.viewer.Preferences.DEFAULT_SHOW_CROSSHAIRS = "All";
papaya.viewer.Preferences.DEFAULT_ATLAS_LOCKS = "Mouse";

papaya.viewer.Preferences.PREF_LIST = ["atlasLocks"];



papaya.viewer.Preferences.prototype.updatePreference = function(field, value) {
    this[field] = value;
    papayaMain.papayaViewer.drawViewer(true);
    createCookie(papaya.viewer.Preferences.COOKIE_PREFIX + field, value, papaya.viewer.Preferences.COOKIE_EXPIRY_DAYS);
}


papaya.viewer.Preferences.prototype.readPreferences = function() {
    for (var ctr = 0; ctr < papaya.viewer.Preferences.PREF_LIST.length; ctr++) {
        var value = readCookie(papaya.viewer.Preferences.COOKIE_PREFIX+papaya.viewer.Preferences.PREF_LIST[ctr]);
        if (value) {
            this[papaya.viewer.Preferences.PREF_LIST[ctr]] = value;
        }
    }
}
