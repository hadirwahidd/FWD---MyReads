import Book from "./Book";

const BookShelfs = ({ bookshelfTitle1, bookshelfTitle2, bookshelfTitle3 }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle1}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book bookTitle="To Kill a Mockingbird" bookAuthors={["Harper Lee"]}
                ImageUrl="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                Link="https://books.google.com.eg/books?id=JQGv8eqVMrMC&dq=to+kill+a+mockingbird&hl=fr&sa=X&redir_esc=y" />
            </li>
            <li>
              <Book bookTitle="Ender's Game" bookAuthors={["Orson Scott Card"]}
                ImageUrl="http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" 
                Link="https://books.google.com.eg/books?id=cW9BPgAACAAJ&dq=ender%27s%20game&hl=fr&source=gbs_book_other_versions" />
            </li>
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle2}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book bookTitle="1776" bookAuthors={["David McCullough"]}
                ImageUrl="http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" 
                Link="https://books.google.com/books?id=R1Jk-A4R5AYC&printsec=frontcover&dq=1776+david+mccullough&hl=fr&sa=X&ved=2ahUKEwihsb6fpoX6AhUENRoKHWTyBsUQ6AF6BAgGEAI"/>
            </li>
            <li>
              <Book bookTitle="Harry Potter and the Sorcerer's Stone" bookAuthors={["J.K. Rowling"]}
                ImageUrl="http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api" 
                Link="https://books.google.com/books?id=wrOQLV6xB-wC&dq=Harry+Potter+and+the+Sorcerer%27s+Stone&hl=fr&sa=X&ved=2ahUKEwjfue22poX6AhUFUhoKHRuhCYsQ6AF6BAgKEAI"/>
            </li>
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle3}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book bookTitle="The Hobbit" bookAuthors={["J. R. R. Tolkein"]}
                ImageUrl="http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api" 
                Link="https://books.google.com/books?id=LLSpngEACAAJ&dq=The+Hobbit+J.+R.+R.+Tolkien&hl=fr&sa=X&ved=2ahUKEwjl_9mHp4X6AhVNSxoKHS9TB8YQ6AF6BAgCEAI"/>
            </li>
            <li>
              <Book bookTitle="Oh, the Places You'll Go!" bookAuthors={["Dr. Seuss"]}
                ImageUrl="http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api" 
                Link="https://books.google.com/books?id=1q_xAwAAQBAJ&printsec=frontcover&dq=Oh,+the+Places+You%27ll+Go!&hl=fr&sa=X&ved=2ahUKEwjh8LGep4X6AhX1hM4BHeISAccQ6AF6BAgIEAI"/>
            </li>
            <li>
              <Book bookTitle="The Adventures of Tom Sawyer" bookAuthors={["Mark Twain"]}
                ImageUrl="http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api" 
                Link="https://books.google.com.eg/books?id=32haAAAAMAAJ&dq=the%20adventures%20of%20tom%20sawyer&hl=fr&source=gbs_book_other_versions"/>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default BookShelfs;