const BINPATH = './node_modules/nightwatch/bin/'
const SCREENSHOT_PATH = './reports/screenshots/'

let config = {
  'bin_path': BINPATH,
  'screenshot_path': SCREENSHOT_PATH,
  'src_folders': ['tests'],
  'output_folder': 'reports',
  'custom_commands_path': '',
  'custom_assertions_path': '',
  'page_objects_path': '',
  'globals_path': '',

  'selenium': {
    'start_process': true,
    'server_path': `${BINPATH}selenium.jar`,
    'log_path': '',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver': BINPATH + 'chromedriver'
    }
  },

  'test_workers': {'enabled': true, 'workers': 'auto'},

  'test_settings': {

    'default': {
      'globals': {
        'waitForConditionTimeout': 10000
      },
      'launch_url': 'http://localhost',
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'silent': true,
      'screenshots': {
        'enabled': true,
        'path': SCREENSHOT_PATH,
        'on_failure': true,
        'on_error': true
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'marionette': true
      }
    },

    'chrome': {
      'desiredCapabilities': {
        'browserName': 'chrome'
      }
    },

    'edge': {
      'desiredCapabilities': {
        'browserName': 'MicrosoftEdge'
      }
    }
  }
}

module.exports = config
