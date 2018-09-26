    package com.bahlsen.plugins.confluence.projectbp;

    import com.atlassian.confluence.plugins.createcontent.api.events.BlueprintPageCreateEvent;

    @EventListener
    public void pageCreatedEvent(PageCreateEvent event) {
        log.debug("Page created event:%s", event.getPage().getTitle());

        if (event.getPage().getTitle().equalsIgnoreCase("&lt;put-in-your-page-title&gt;")) {
            labelManager.addLabel((Labelable) event.getPage(), new Label("&lt;put-in-your-label"));
        }
    }
