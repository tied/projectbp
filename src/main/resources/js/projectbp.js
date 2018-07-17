AJS.bind("blueprint.wizard-register.ready", function () {
    function submitProjectSpace(e, state) {
        var dt = new Date();
        state.pageData.ContentPageTitle = dt.getFullYear() + "/" + (dt.getMonth() + 1) + " - Project " + state.pageData.name; //+ " " + state.pageData.spaceHomepageHeading;
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function submitTeamSpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name; //+ " " + state.pageData.spaceHomepageHeading;
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function submitInnoSpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name; //+ " " + state.pageData.spaceHomepageHeading;
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function preRenderExampleSpace(e, state) {
        state.soyRenderContext['atlToken'] = AJS.Meta.get('atl-token');
        state.soyRenderContext['showSpacePermission'] = true;
    }
    Confluence.Blueprint.setWizard('com.bahlsen.plugins.confluence.projectbp.projectbp:project-space-blueprint-item', function(wizard) {
        wizard.on("submit.projectSpaceId", submitProjectSpace);
        wizard.on("pre-render.projectSpaceId", preRenderExampleSpace);
        wizard.on("post-render.projectSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
    Confluence.Blueprint.setWizard('com.bahlsen.plugins.confluence.projectbp.projectbp:team-space-blueprint-item', function(wizard) {
        wizard.on("submit.teamSpaceId", submitTeamSpace);
        wizard.on("pre-render.teamSpaceId", preRenderExampleSpace);
        wizard.on("post-render.teamSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
    Confluence.Blueprint.setWizard('com.bahlsen.plugins.confluence.projectbp.projectbp:innoproject-space-blueprint-item', function(wizard) {
        wizard.on("submit.innoprojectSpaceId", submitInnoSpace);
        wizard.on("pre-render.innoprojectSpaceId", preRenderExampleSpace);
        wizard.on("post-render.innoprojectSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
});
