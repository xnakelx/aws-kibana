
/**
 * Test entry file
 *
 * This is programatically created and updated, do not modify
 *
 * context: {"env":"development","urlBasePath":"","sourceMaps":true,"kbnVersion":"5.3.3","buildNum":8467}
 * includes code from:
 *  - console@kibana
 *  - dev_mode@kibana
 *  - elasticsearch@kibana
 *  - kbn_doc_views@kibana
 *  - kbn_vislib_vis_types@kibana
 *  - kibana@kibana
 *  - markdown_vis@kibana
 *  - metric_vis@kibana
 *  - spy_modes@kibana
 *  - status_page@kibana
 *  - table_vis@kibana
 *  - tagcloud@kibana
 *  - tests_bundle@kibana
 *  - timelion@kibana
 *
 */

require('ui/chrome');
require('plugins/timelion/app_with_autoload');
require('plugins/console/hacks/register');
require('plugins/kibana/dev_tools/hacks/hide_empty_tools');
require('plugins/timelion/lib/panel_registry');
require('plugins/timelion/panels/timechart/timechart');
require('ui/chrome').bootstrap(/* xoxo */);

