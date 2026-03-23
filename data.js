var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5622725392004533,
          "pitch": 0.28043085697930437,
          "rotation": 0,
          "target": "1-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-estar-comedor",
      "name": "Estar Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7495915812580662,
          "pitch": 0.23082959701480021,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.37083835400453147,
          "pitch": 0.3132917511852362,
          "rotation": 0,
          "target": "2-estudio"
        },
        {
          "yaw": 0.8832813801056396,
          "pitch": 0.264457899058403,
          "rotation": 0,
          "target": "3-dormi2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-estudio",
      "name": "Estudio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7103484458805891,
          "pitch": 0.44944736272774577,
          "rotation": 0,
          "target": "1-estar-comedor"
        },
        {
          "yaw": -0.502943648486287,
          "pitch": 0.2405117587795118,
          "rotation": 0,
          "target": "3-dormi2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dormi2",
      "name": "Dormi2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02356093541816051,
          "pitch": 0.35530375658650115,
          "rotation": 0,
          "target": "1-estar-comedor"
        },
        {
          "yaw": 0.6193000052858704,
          "pitch": 0.22859844745004132,
          "rotation": 0,
          "target": "2-estudio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
