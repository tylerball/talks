![](diamond.gif)

---

# The Assets Gem
## The Shopify experience in every app

---

# The problem
## We've invested so much time and effort into giving the admin a great UI. How do we share this with other apps without repeating ourselves?

---

# In 2015, two possible solutions

1. Move common front end assets to another place, consume it from the admin and other apps
2. Copy common assets from the admin to another place to share with apps

---

# In 2015, two possible solutions

1. _Move_ common front end assets to another place, consume it from the admin and other apps
2. _Copy_ common assets from the admin to another place to share with apps

---

# We have a lot of apps now!

- channels: Facebook, Twitter, Pinterest, Buy Button, Amazon, Facebook Messenger
- embedded apps: Digital downloads, Wholesale, Barcode printer, Shopify Scripts, Bulk Discounts
- integrations: Accounting, UberRUSH, Avalara
- experiments: React Reports

Github search: `shopify_assets user:shopify filename:Gemfile`

^we want all of these to have a good UI

---

# Move

Relocating the most global and shared assets to a common dependency of all apps that need the admin styles: fonts, layout, the grid, forms, etc.

- Central location for all assets, no duplication
- Slows down development of the admin: developers need to make changes in a different repository and then update the dependency in the admin

---

# Copy

Copy assets to a different repository as external apps need them

- Doesn't affect admin development
- Slows down development of apps: something broken in the admin needs to be fixed there then propogated to apps via dependency
- Forget backwards compatibility

^Ultimately we went with this solution

^ADMIN IS CORE PART OF BUSINESS

---

# Some history

![inline](old.png)

^I joined a few months after this and started to work on the brochure, where becuz jekyll those assets were copied again to the brochure repository

---

# V1

- beloved `admin2` assets
- also contained assets used on brand sites

^process very manual, slow, wasn't used very much
^brand assets got moved to another repo
^didn't touch it much

---

![right](zuck.jpg)

# Then came Facebook and Buy Button

^the gem was abandoned and out of date so we were manually cping things into each project from the admin
^redo!

---

# V2

- Automate the process as much as possible
- Make UI Components work in apps
- Reduce the amount of assets included in each app's application bundle

---

# The process

1. We maintain a whitelist of files we want out of the admin.
2. We copy these files into the gem
3. Release a new version
4. Update in consuming apps
5. Rinse
6. Repeat

^whitelist: in an effort to keep the amount of CSS and JS in each project small.

---

![fit](whitelist.png)

^files are copied AS IS

---

# Problems

- No Backwards compatibility. Updating the gem in your project could break _anything_.
- Not many tests. We ensure that the assets we bring in compile, but we're not copying over any of the unit tests from admin.
- Some components that depend on pieces of shopify don't work yet.

^If anyone has any ideas about how to solve these, please contact me or come to the #assets-gem Slack channel

---

# Contributions welcome!

---

# Keeping up with the assets gem

Visit us in #assets-gem
Keep up with new versions on the github releases page: http://github.com/shopify/assets/releases

Questions?
