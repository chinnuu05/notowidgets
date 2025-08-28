# Notofox Emeddable Widgets project

## This project has a bootloader script and build scripts for each Notofox widget

### Build the feedback widget
```npm run build:feedback```

### Build the bootstrap loader
```npm run build:bootstrap```


### Embed snippet for Feedback Widget
```
<script src="scripts/notosdk.js"></script>
<script>
    window.Notofox("initialize_widget", {
      project: "Notofox",
      defaultTheme: "light",
      locale: "en",
      widgetType: "feedback",
      triggerConfig: {
        type: "floating"
      },
      containerId: "notofox-widget",
  });
</script>
```

### Test the widgets with
```npm run dev```
