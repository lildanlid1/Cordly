# Cordly

Cordly is a Morphe patch source for Discord Android, based on Venus Patches. It preserves Discord's original app name, icon, and `com.discord` package.

## GitHub Actions billing lock

If the import job says **"The job was not started because your account is locked due to a billing issue"**, GitHub Actions is blocked at the account level. The Ubuntu runner migration message is not the cause. Check [Billing & licensing](https://github.com/settings/billing) or [GitHub Support](https://support.github.com/).

If you want to **import the source without GitHub Actions**, use a local Git terminal:

```bash
git clone https://github.com/lildanlid1/Cordly.git
cd Cordly
bash scripts/import-cordly-local.sh
```

This extracts the **already uploaded** `Cordly.zip`, validates required files, commits the expanded source, and pushes it to `main`. Your Git credentials must be configured locally. It does **not** compile or publish the Morphe `.mpp` release; building still needs a functioning runner or local Gradle build.

## Publishing Cordly v1.23.0

The complete prepared ZIP (`Cordly.zip`) is already in the repository root. No additional ZIP upload is needed.

The [source-import workflow](https://github.com/lildanlid1/Cordly/actions/workflows/import-source.yml) is configured to recognize `Cordly.zip` and extract the `Cordly/` source tree. Its first automatic run failed before executing any steps. Check the [failed run](https://github.com/lildanlid1/Cordly/actions/runs/41165761077) for GitHub's runner/account error details and resolve the GitHub Actions issue before retrying.

If the GitHub Actions runner cannot be used, download `Cordly.zip`, extract it locally, and upload the **contents inside** `Cordly/` to the repository root, preserving directories (including `.github/`). Then run **Actions → Build and publish Cordly** when Actions become available. The `.mpp` release and `patches-bundle.json` metadata must both be published for Morphe installation.

[Add Cordly to Morphe](https://morphe.software/add-source?github=lildanlid1/Cordly)

The Morphe link requires a successful `.mpp` release and `patches-bundle.json`. An import alone does not make the source installable.

### Prepared features

- Server icons, banners, splashes, emoji and sticker downloads
- Server blueprint export and bot-authorized import utility
- Embed and Components V2 message JSON inspection
- Original Discord application branding retained

Licensing and upstream acknowledgments are included in the full prepared archive.

**Status:** Source ZIP uploaded. Extraction and `.mpp` release are pending because the import job failed before its first step.
