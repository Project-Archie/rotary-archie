# Optional: give Archie memory with a Project

Everything on this page is optional. If you have installed the skill and Archie is answering your questions well, you can stop here and come back another day.

## Why you might want one

The skill gives you a well-behaved Archie in every conversation. What it cannot do is remember you. Each new chat starts from nothing, so you find yourself typing "I am the governor-elect of District 5400" over and over.

A Project is a workspace that holds a set of instructions and remembers what you have discussed. Tell Archie once inside a Project which district you serve and what role you hold, and it carries that into every later conversation in the same Project. Ongoing work carries over too, so a conference planning thread you started in October still makes sense in February.

A Project is also where your own documents live. District standing rules, your operating policies, a committee roster, last year's budget. Archie reads them alongside the Rotary International documents and can cite both in the same answer. Rotary policy still governs unless a lawful local rule applies.

Setting up a Project takes about 15 minutes. A Project with your own district documents in it is also where Tier 3 begins, so if you go on to build something for your whole district, this is the first step of it. See tier-3-customize.md.

## Claude

1. Open Claude and click **Projects** in the left sidebar.
2. Click **Create Project**.
3. Give it a name that will still make sense to you in a year, such as "Archie, District 5400".
4. Open `instructions/claude-project.md`. Copy the text that sits between the two horizontal dividers, and nothing outside them.
5. Paste that text into the Project's **Instructions** field and save.
6. Optional. Add your own district documents under **Project Knowledge**.
7. Start a conversation in the Project and tell Archie your district number and your role.

You do not need to upload the seven Rotary International governing documents. They are already inside the skill you installed, and uploading a second copy only makes the Project slower to search.

## ChatGPT

Which set of steps you follow depends on your plan. Both end in the same place.

### If your workspace has skills (Business, Enterprise, Edu, Healthcare)

1. Install the skill first, following install/chatgpt.md.
2. In ChatGPT, find the **Projects** heading in the left sidebar.
3. Click the **+** next to that heading to create a project, and give it a name.
4. Open `instructions/chatgpt-project.md` and copy the text between the two horizontal dividers.
5. Open the project, find its instructions box (ChatGPT labels it Instructions in the project's settings), paste the text there, and save.
6. Optional. Add your own district documents to the project.
7. Start a conversation in the project and tell Archie your district number and your role.

The Rotary documents are already inside the skill, so there is nothing else to upload.

### If you are on Free, Plus, or Pro

Your account cannot install skills, so the Project has to carry everything itself. That includes the Rotary documents.

1. In ChatGPT, find the **Projects** heading in the left sidebar.
2. Click the **+** next to that heading to create a project, and give it a name.
3. Upload the seven Rotary International governing documents from `../rotary-archie/knowledge-base/`:
   - `1_2025_Lead_Your_District_-_GOV_MANUAL.md`
   - `2_2025_District_Planning_Guide.md`
   - `3_2025_Manual_of_Procedure.md`
   - `4_2025_Code_of_Policies.md`
   - `5_Rotary_International_Bylaws.md`
   - `6_Rotary_International_Constitution.md`
   - `7_Rotary_Club_Constitution.md`
4. Open `instructions/chatgpt-project-no-skill.md` and copy the text between the two horizontal dividers.
5. Open the project, find its instructions box (ChatGPT labels it Instructions in the project's settings), paste the text there, and save.
6. Optional. Add your own district documents to the project alongside the seven.
7. Start a conversation in the project and tell Archie your district number and your role.

Use the no-skill instructions file for this path. It carries the behavior that the skill would otherwise supply, so the ordinary Claude or with-skill text would leave gaps.

## Advanced: build your own Custom GPT

Most people should skip this section. A public Archie GPT already exists at https://bit.ly/project-archie, it is free to use, and it needs no setup. Build your own only if you want to hand a private, differently configured Archie to a specific group of people.

1. Create a new Custom GPT in ChatGPT.
2. Open `instructions/custom-gpt.md` and paste its system message into the GPT's instructions field.
3. Upload the same seven governing documents listed above as the GPT's Knowledge.
4. Turn **Code Interpreter** on.
5. Turn **Web Browsing** on.
6. Leave **Actions** empty. Archie does not use them.
7. Turn image generation off.

## Test it

Run through testing-your-setup.md. It walks six questions past Archie and tells you what a good answer looks like for each one.

A Project deserves one extra check that a plain skill install does not need, because memory is the whole reason you built it. Tell Archie something about yourself in one conversation, such as your district number. Then wait until the next day, open a brand new conversation inside the same Project, and ask a question that depends on knowing it, such as "Who is my Zone coordinator?" or "Remind me which district I serve." If Archie has to ask you again, the Project is not holding context, and the usual cause is that the conversation was started outside the Project rather than inside it.
