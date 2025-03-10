/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background-color: #f0f2f5;
            }
            .container {
              text-align: center;
              padding: 20px;
              background-color: white;
              border-radius: 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            h1 {
              color: #1a73e8;
              margin-bottom: 20px;
            }
            p {
              color: #444;
              font-size: 18px;
              line-height: 1.6;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hello Techies! 👋</h1>
            <p>This is group 1 and we worked on an ecommerce api</p>
            <p>Sit back and enjoy the ride! 🚀</p>
          </div>
        </body>
      </html>
    `;
  }
}
