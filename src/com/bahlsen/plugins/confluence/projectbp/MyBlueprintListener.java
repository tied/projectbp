public class MyBlueprintListener
{
    private static final ModuleCompleteKey MY_BLUEPRINT_KEY = new ModuleCompleteKey(
        "com.atlassian.confluence.plugins.myplugin", "myplugin-blueprint");

    private static final Logger log = LoggerFactory.getLogger(MyBlueprintListener.class);

    public MyBlueprintListener(LabelManager labelManager)
    {
        eventPublisher.register(this);
    }

    @EventListener
    public void pageCreatedEvent(PageCreateEvent event) {
        log.debug("Page created event:%s", event.getPage().getTitle());

        if (event.getPage().getTitle().equalsIgnoreCase("test")) {
            labelManager.addLabel((Labelable) event.getPage(), new Label("test_label"));
        }
    }
}
