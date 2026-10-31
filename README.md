# Cordly

Cordly is a Morphe patch source for Discord Android, based on Venus Patches. It preserves Discord's original app name, icon, and `com.discord` package.

## Finish uploading Cordly v1.23.0

The repository has an automatic ZIP importer. To publish the prepared project:

1. Download `Cordly-GitHub-Morphe-Ready.zip` from the ChatGPT conversation.
2. Open **Add file → Upload files** in this repository and upload the **ZIP itself** at the repository root (do not extract it).
3. Commit the upload to `main`.
4. Open **Actions → Import Cordly source ZIP**. It verifies and extracts the `Cordly/` folder, commits the source, and removes the uploaded ZIP.
5. Enable Actions workflow **Read and write** permissions in **Settings → Actions → General**, if needed.
6. After successful import, run **Actions → Build and publish Cordly → Run workflow**. Verify the resulting `.mpp` release and source metadata.

[Add Cordly to Morphe](https://morphe.software/add-source?github=lildanlid1/Cordly)

The Morphe link requires a successful `.mpp` release and `patches-bundle.json`. An import alone does not make the source installable.

### Prepared features

- Server icons, banners, splashes, emoji and sticker downloads
- Server blueprint export and bot-authorized import utility
- Embed and Components V2 message JSON inspection
- Original Discord application branding retained

Licensing and upstream acknowledgments are included in the full prepared archive.

**Status:** Automated import workflow committed. The complete project files and installable release still require the ZIP import and build.
