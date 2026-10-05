// Builds the TestPrep student sign-up form in the owner's Google Drive.
// Run once from script.google.com: select buildStudentForm, press Run.
function buildStudentForm() {
  var form = FormApp.create('TestPrep — Student Sign-Up');
  form.setTitle('TestPrep by House of Prep — Student Sign-Up')
    .setDescription('Thanks for joining today! This takes about 2 minutes. It helps TestPrep and your school understand your goals so we can support you properly.')
    .setProgressBar(true)
    .setShowLinkToRespondAgain(false)
    .setConfirmationMessage('You’re in! The TestPrep team will be in touch soon. Now go beat Nizar’s plan.');

  // 1 · About you
  form.addSectionHeaderItem().setTitle('About you');
  form.addTextItem().setTitle('Full name').setRequired(true);
  form.addTextItem().setTitle('School').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Grade').setChoiceValues(['Grade 10', 'Grade 11', 'Grade 12']).setRequired(true);
  form.addTextItem().setTitle('Your WhatsApp number').setHelpText('Include the country code, e.g. +961 …').setRequired(true);
  form.addTextItem().setTitle('Your email').setValidation(FormApp.createTextValidation().requireTextIsEmail().build()).setRequired(true);

  // 2 · Parent / guardian
  form.addPageBreakItem().setTitle('Parent or guardian');
  form.addTextItem().setTitle('Parent or guardian name').setRequired(true);
  form.addTextItem().setTitle('Parent or guardian phone number').setHelpText('Include the country code.').setRequired(true);

  // 3 · Your goals
  form.addPageBreakItem().setTitle('Your goals');
  form.addTextItem().setTitle('What do you want to study? (target major)').setHelpText('Not sure yet? Write “Not sure”.').setRequired(true);
  form.addParagraphTextItem().setTitle('Which universities are you aiming for?').setHelpText('Up to three.').setRequired(true);
  form.addCheckboxItem().setTitle('Where do you want to study?')
    .setChoiceValues(['Lebanon', 'USA', 'Canada', 'UK', 'Europe', 'GCC', 'Not sure yet']).showOtherOption(true).setRequired(true);
  form.addMultipleChoiceItem().setTitle('Where are you with the SAT?')
    .setChoiceValues(['Haven’t started', 'Studying for it now', 'Already took it']).setRequired(true);
  form.addTextItem().setTitle('If you already took the SAT, what was your score?').setHelpText('Leave blank if you haven’t taken it.');
  form.addMultipleChoiceItem().setTitle('When do you plan to take the SAT (next)?')
    .setChoiceValues(['Within 3 months', '3–6 months', '6–12 months', 'More than a year from now', 'Not sure']).setRequired(true);
  form.addCheckboxItem().setTitle('Any other tests you’ll need?')
    .setChoiceValues(['IELTS', 'TOEFL', 'AP', 'USJ concours', 'BAU entrance exam', 'None', 'Not sure']).showOtherOption(true);

  // 4 · Where you stand
  form.addPageBreakItem().setTitle('Where you stand');
  form.addScaleItem().setTitle('How ready do you feel for the SAT right now?').setBounds(1, 5).setLabels('Not at all', 'Very ready').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Which part worries you more?')
    .setChoiceValues(['Math', 'English (Reading & Writing)', 'Both', 'Not sure']).setRequired(true);

  // 5 · What you'd like help with
  form.addPageBreakItem().setTitle('What you’d like help with');
  form.addCheckboxItem().setTitle('I’m interested in…')
    .setChoiceValues(['SAT course (TestPrep)', 'School subjects support (PrepMe)', 'University and career guidance (WeGuide)', 'Just exploring for now'])
    .setRequired(true);
  form.addMultipleChoiceItem().setTitle('Best way to reach you')
    .setChoiceValues(['WhatsApp', 'Phone call', 'Email']).setRequired(true);

  // Consent
  form.addCheckboxItem().setTitle('Consent')
    .setChoiceValues(['I agree that House of Prep and my school may contact me and my parent or guardian about this program.'])
    .setRequired(true);

  // Responses go to a linked Google Sheet next to the form.
  var sheet = SpreadsheetApp.create('TestPrep — Student Sign-Up (Responses)');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  try { form.setPublished(true); } catch (e) { /* older runtimes publish by default */ }
  try { form.setAcceptingResponses(true); } catch (e) {}

  Logger.log('RESPONDER_URL ' + form.getPublishedUrl());
  Logger.log('EDIT_URL ' + form.getEditUrl());
  Logger.log('SHEET_URL ' + sheet.getUrl());
}
