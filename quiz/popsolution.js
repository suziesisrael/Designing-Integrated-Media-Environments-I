//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[2]="If you publish something in error, you can revert to earlier versions for these elements:"
choice2[1]="Pages"
choice2[2]="Posts"
choice2[3]="Menus"
choice2[4]="A and B"

question[3]="If you have user privileges to your website\(s\), you can log in  with your gatorlink by typing the following after your site\'s homepage url:"
choice3[1]="\/wordpress"
choice3[2]="\/wp\-admin"
choice3[3]="\/login"
choice3[4]="\/uf\-login"

question[4]="In your page content, you can add a link that goes to any valid url by"
choice4[1]="Highlighting the word you want link in your visual editor and clicking the link icon"
choice4[2]="Highlighting the word you want link in your text editor and clicking the link icon"
choice4[3]="In your text editor, typing \<a href\=\"\[valid url\]\"\>before the word you want to link and \<\/a\> after the word you want to link"
choice4[4]="All of the above"

question[5]="To link some text so that it opens a pdf when clicked:"
choice5[1]="Add the pdf to your Media library, then click \"copy url to clipboard\". Then add it as you would add any other URL."
choice5[2]="Drop the pdf directly onto the page from your desktop."
choice5[3]="Import the pdf using \"import\" from the file menu."
choice5[4]="You can'd link text to a pdf."

question[6]="You can preview changes for the following elements by using Draft mode:"
choice6[1]="Posts"
choice6[2]="Pages"
choice6[3]="Menus"
choice6[4]="All of the Above"

question[7]="Menus and Widgets can be edited:"
choice7[1]="Under the appearance menu in the left nav"
choice7[2]="Under the Customize menu in the admin bar"
choice7[3]="Only if you have Administrator privileges"
choice7[4]="All of the above"

question[8]="You can add or update plugin functionality:"
choice8[1]="If you have Editor privileges"
choice8[2]="If you have Administrator Privileges"
choice8[3]="If you have any kind of user role"
choice8[4]="Only the CLAS Website team can update or add plugins"

question[9]="If you have a page with complex html content in the page editor\, it\'s best practice to:"
choice9[1]="Only edit in the Text editor, as the visual editor can make \"helpful\" changes and break the layout"
choice9[2]="Only edit in the Visual editor"
choice9[3]="Make changes even if you\'re not comfortable with html"
choice9[4]="Become an expert at html in order to make changes to your site"

question[10]="Shortcodes are:"
choice10[1]="Special codes surrounded by square brackets that insert content with special functionality into your page"
choice10[2]="Special codes that should never be used by anyone except the CLAS Website team"
choice10[3]="HTML code that inserts links into your page"
choice10[4]="Two or three\-digit codes that represent a post"

question[1]="WordPress is:"
choice1[1]="A website content management system for people with little to no coding experience"
choice1[2]="Implemented the same on every site at UF"
choice1[3]="A platform which powers over 40\% of the internet\, according to some reports"
choice1[4]="A and C"

solution[1]="d"
solution[2]="d"
solution[3]="b"
solution[4]="d"
solution[5]="a"
solution[6]="d"
solution[7]="d"
solution[8]="d"
solution[9]="a"
solution[10]="a"
