const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');


const mock = new MockAdapter(axios);
const BASE_URL = 'https://ccd.farazpardazan.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcmFkbWluIiwicm9sZXMiOlsiU1VQRVJfQURNSU4iXSwiaWF0IjoxNzQ2NTI5NDM4LCJleHAiOjE3NDY1NTgyMzh9.TrhDROvhnGOg8zeBzLKBCC2FsYBollPNFXGyfkeFiXI';


describe('Club Customer API Tests', () => {
  beforeEach(() => {
    mock.reset();
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  });

  describe('Rules Engine - Score Types', () => {
    const scoreTypeId = 1;
    const scoreTypeOutput = { id: scoreTypeId, name: 'Test Score', value: 100 };
    const scoreTypeInput = { name: 'Updated Score', value: 200 };

    test('GET /rules-engine/score-types/{id} should return score type', async () => {
      mock.onGet(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`).reply(200, scoreTypeOutput);
      const response = await axios.get(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(scoreTypeOutput);
    });

    test('PUT /rules-engine/score-types/{id} should update score type', async () => {
      mock.onPut(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`).reply(200, { ...scoreTypeOutput, ...scoreTypeInput });
      const response = await axios.put(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`, scoreTypeInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(scoreTypeInput.name);
    });

    test('DELETE /rules-engine/score-types/{id} should delete score type', async () => {
      mock.onDelete(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`).reply(200, true);
      const response = await axios.delete(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`);
      expect(response.status).toBe(200);
      expect(response.data).toBe(true);
    });

    test('GET /rules-engine/score-types/{id} should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onGet(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`).reply(401);
      await expect(axios.get(`${BASE_URL}/rules-engine/score-types/${scoreTypeId}`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Rules Engine - Rule Configs', () => {
    const ruleConfigId = 1;
    const ruleConfigOutput = { id: ruleConfigId, ruleName: 'Test Rule', active: true };
    const ruleConfigInput = { ruleName: 'Updated Rule', active: false };

    test('GET /rules-engine/rule-configs/{id} should return rule config', async () => {
      mock.onGet(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`).reply(200, ruleConfigOutput);
      const response = await axios.get(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ruleConfigOutput);
    });

    test('PUT /rules-engine/rule-configs/{id} should update rule config', async () => {
      mock.onPut(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`).reply(200, { ...ruleConfigOutput, ...ruleConfigInput });
      const response = await axios.put(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`, ruleConfigInput);
      expect(response.status).toBe(200);
      expect(response.data.ruleName).toBe(ruleConfigInput.ruleName);
    });

    test('DELETE /rules-engine/rule-configs/{id} should delete rule config', async () => {
      mock.onDelete(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`).reply(200, true);
      const response = await axios.delete(`${BASE_URL}/rules-engine/rule-configs/${ruleConfigId}`);
      expect(response.status).toBe(200);
      expect(response.data).toBe(true);
    });
  });

  describe('Member Profile', () => {
    const profileOutput = { id: 1, name: 'John Doe', email: 'john@example.com' };
    const profileInput = { name: 'Jane Doe', email: 'jane@example.com' };

    test('GET /member/profile/details should return profile details', async () => {
      mock.onGet(`${BASE_URL}/member/profile/details`).reply(200, profileOutput);
      const response = await axios.get(`${BASE_URL}/member/profile/details`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(profileOutput);
    });

    test('PUT /member/profile/details should update profile details', async () => {
      mock.onPut(`${BASE_URL}/member/profile/details`).reply(200, { ...profileOutput, ...profileInput });
      const response = await axios.put(`${BASE_URL}/member/profile/details`, profileInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(profileInput.name);
    });
  });

  describe('Admin - Voting', () => {
    const votingId = 1;
    const votingOutput = { id: votingId, title: 'Test Vote', isActive: true };

    test('GET /admin/voting/{id} should return voting details', async () => {
      mock.onGet(`${BASE_URL}/admin/voting/${votingId}`).reply(200, votingOutput);
      const response = await axios.get(`${BASE_URL}/admin/voting/${votingId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput);
    });

    test('PUT /admin/voting/{id} should update voting state', async () => {
      mock.onPut(`${BASE_URL}/admin/voting/${votingId}?isActive=false`).reply(200, { ...votingOutput, isActive: false });
      const response = await axios.put(`${BASE_URL}/admin/voting/${votingId}?isActive=false`);
      expect(response.status).toBe(200);
      expect(response.data.isActive).toBe(false);
    });

    test('DELETE /admin/voting/{id} should delete voting', async () => {
      mock.onDelete(`${BASE_URL}/admin/voting/${votingId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/voting/${votingId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Version Note', () => {
    const versionNoteId = 1;
    const versionNoteOutput = { id: versionNoteId, note: 'Version 1.0' };
    const versionNoteInput = { note: 'Version 1.1' };

    test('GET /admin/version-note/{id} should return version note', async () => {
      mock.onGet(`${BASE_URL}/admin/version-note/${versionNoteId}`).reply(200, versionNoteOutput);
      const response = await axios.get(`${BASE_URL}/admin/version-note/${versionNoteId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(versionNoteOutput);
    });

    test('PUT /admin/version-note/{id} should update version note', async () => {
      mock.onPut(`${BASE_URL}/admin/version-note/${versionNoteId}`).reply(200, { ...versionNoteOutput, ...versionNoteInput });
      const response = await axios.put(`${BASE_URL}/admin/version-note/${versionNoteId}`, versionNoteInput);
      expect(response.status).toBe(200);
      expect(response.data.note).toBe(versionNoteInput.note);
    });

    test('DELETE /admin/version-note/{id} should delete version note', async () => {
      mock.onDelete(`${BASE_URL}/admin/version-note/${versionNoteId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/version-note/${versionNoteId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - User Settings', () => {
    const userId = 1;
    const passwordInput = { password: 'newPassword123' };
    const userInfoInput = { name: 'Jane Doe', email: 'jane@example.com' };

    test('PUT /admin/user-settings/{id}/change-password should change password', async () => {
      mock.onPut(`${BASE_URL}/admin/user-settings/${userId}/change-password`).reply(200);
      const response = await axios.put(`${BASE_URL}/admin/user-settings/${userId}/change-password`, passwordInput);
      expect(response.status).toBe(200);
    });

    test('PUT /admin/user-settings/{id}/change-info should change user info', async () => {
      mock.onPut(`${BASE_URL}/admin/user-settings/${userId}/change-info`).reply(200);
      const response = await axios.put(`${BASE_URL}/admin/user-settings/${userId}/change-info`, userInfoInput);
      expect(response.status).toBe(200);
    });
  });
});




describe('Club Customer API Tests - Additional Endpoints', () => {
  beforeEach(() => {
    mock.reset();
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  });

  describe('Admin - Spend Score Bank Article', () => {
    const articleId = 1;
    const articleOutput = { id: articleId, title: 'Test Article', content: 'Sample content' };
    const articleInput = { title: 'Updated Article', content: 'Updated content' };

    test('GET /admin/spend-score-bank-article/{id} should return article', async () => {
      mock.onGet(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`).reply(200, articleOutput);
      const response = await axios.get(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(articleOutput);
    });

    test('PUT /admin/spend-score-bank-article/{id} should update article', async () => {
      mock.onPut(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`).reply(200, { ...articleOutput, ...articleInput });
      const response = await axios.put(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`, articleInput);
      expect(response.status).toBe(200);
      expect(response.data.title).toBe(articleInput.title);
    });

    test('DELETE /admin/spend-score-bank-article/{id} should delete article', async () => {
      mock.onDelete(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`);
      expect(response.status).toBe(200);
    });

    test('GET /admin/spend-score-bank-article/{id} should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onGet(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`).reply(401);
      await expect(axios.get(`${BASE_URL}/admin/spend-score-bank-article/${articleId}`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Admin - Offline Rule Engine', () => {
    const ruleId = 1;
    const ruleOutput = { id: ruleId, ruleName: 'Offline Rule', score: 50 };
    const ruleInput = { ruleName: 'Updated Offline Rule', score: 75 };

    test('GET /admin/rule/offline/{id} should return rule details', async () => {
      mock.onGet(`${BASE_URL}/admin/rule/offline/${ruleId}`).reply(200, ruleOutput);
      const response = await axios.get(`${BASE_URL}/admin/rule/offline/${ruleId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ruleOutput);
    });

    test('PUT /admin/rule/offline/{id} should update rule', async () => {
      mock.onPut(`${BASE_URL}/admin/rule/offline/${ruleId}`).reply(200, { ...ruleOutput, ...ruleInput });
      const response = await axios.put(`${BASE_URL}/admin/rule/offline/${ruleId}`, ruleInput);
      expect(response.status).toBe(200);
      expect(response.data.ruleName).toBe(ruleInput.ruleName);
    });
  });

  describe('Admin - Profile Favorite Questions', () => {
    const questionId = 1;
    const questionOutput = { id: questionId, question: 'Favorite color?', answer: 'Blue' };
    const questionInput = { question: 'Favorite food?', answer: 'Pizza' };

    test('GET /admin/profile/favorite/questions/{id} should return question', async () => {
      mock.onGet(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`).reply(200, questionOutput);
      const response = await axios.get(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(questionOutput);
    });

    test('PUT /admin/profile/favorite/questions/{id} should update question', async () => {
      mock.onPut(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`).reply(200, { ...questionOutput, ...questionInput });
      const response = await axios.put(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`, questionInput);
      expect(response.status).toBe(200);
      expect(response.data.question).toBe(questionInput.question);
    });

    test('DELETE /admin/profile/favorite/questions/{id} should delete question', async () => {
      mock.onDelete(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/profile/favorite/questions/${questionId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Profile Communication', () => {
    const communicationOutput = { id: 1, method: 'Email', details: 'test@example.com' };
    const communicationInput = { method: 'SMS', details: '1234567890' };

    test('GET /admin/profile/communication should return communication details', async () => {
      mock.onGet(`${BASE_URL}/admin/profile/communication`).reply(200, communicationOutput);
      const response = await axios.get(`${BASE_URL}/admin/profile/communication`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(communicationOutput);
    });

    test('PUT /admin/profile/communication should update communication details', async () => {
      mock.onPut(`${BASE_URL}/admin/profile/communication`).reply(200, { ...communicationOutput, ...communicationInput });
      const response = await axios.put(`${BASE_URL}/admin/profile/communication`, communicationInput);
      expect(response.status).toBe(200);
      expect(response.data.method).toBe(communicationInput.method);
    });
  });

  describe('Admin - Profile About Us FAQ', () => {
    const faqId = 1;
    const faqOutput = { id: faqId, question: 'What is this?', answer: 'A FAQ' };
    const faqInput = { question: 'How does it work?', answer: 'Like this' };

    test('GET /admin/profile/about-us/faq/{id} should return FAQ', async () => {
      mock.onGet(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`).reply(200, faqOutput);
      const response = await axios.get(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(faqOutput);
    });

    test('PUT /admin/profile/about-us/faq/{id} should update FAQ', async () => {
      mock.onPut(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`).reply(200, { ...faqOutput, ...faqInput });
      const response = await axios.put(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`, faqInput);
      expect(response.status).toBe(200);
      expect(response.data.question).toBe(faqInput.question);
    });

    test('DELETE /admin/profile/about-us/faq/{id} should delete FAQ', async () => {
      mock.onDelete(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/profile/about-us/faq/${faqId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Prize', () => {
    const prizeId = 1;
    const prizeOutput = { id: prizeId, name: 'Gift Card', value: 100 };
    const prizeInput = { name: 'Updated Gift Card', value: 200 };
    const customerId = 'CUST123';

    test('GET /admin/prize/{id} should return prize details', async () => {
      mock.onGet(`${BASE_URL}/admin/prize/${prizeId}`).reply(200, prizeOutput);
      const response = await axios.get(`${BASE_URL}/admin/prize/${prizeId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(prizeOutput);
    });

    test('PUT /admin/prize/{id} should update prize', async () => {
      mock.onPut(`${BASE_URL}/admin/prize/${prizeId}`).reply(200, { ...prizeOutput, ...prizeInput });
      const response = await axios.put(`${BASE_URL}/admin/prize/${prizeId}`, prizeInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(prizeInput.name);
    });

    test('POST /admin/prize/{id} should add winner to prize', async () => {
      mock.onPost(`${BASE_URL}/admin/prize/${prizeId}?customerId=${customerId}`).reply(200, {
        ...prizeOutput,
        winner: customerId,
      });
      const response = await axios.post(`${BASE_URL}/admin/prize/${prizeId}?customerId=${customerId}`);
      expect(response.status).toBe(200);
      expect(response.data.winner).toBe(customerId);
    });

    test('DELETE /admin/prize/{id} should delete prize', async () => {
      mock.onDelete(`${BASE_URL}/admin/prize/${prizeId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/prize/${prizeId}`);
      expect(response.status).toBe(200);
    });
  });
});


describe('Club Customer API Tests - More Endpoints', () => {
  beforeEach(() => {
    mock.reset();
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  });

  describe('Admin - Other Lottery', () => {
    const lotteryId = 1;
    const lotteryOutput = { id: lotteryId, name: 'Other Lottery', prize: 'Gift Card' };
    const lotteryInput = { name: 'Updated Other Lottery', prize: 'Cash' };

    test('GET /admin/other-lottery/{id} should return lottery details', async () => {
      mock.onGet(`${BASE_URL}/admin/other-lottery/${lotteryId}`).reply(200, lotteryOutput);
      const response = await axios.get(`${BASE_URL}/admin/other-lottery/${lotteryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(lotteryOutput);
    });

    test('PUT /admin/other-lottery/{id} should update lottery', async () => {
      mock.onPut(`${BASE_URL}/admin/other-lottery/${lotteryId}`).reply(200, { ...lotteryOutput, ...lotteryInput });
      const response = await axios.put(`${BASE_URL}/admin/other-lottery/${lotteryId}`, lotteryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(lotteryInput.name);
    });

    test('DELETE /admin/other-lottery/{id} should delete lottery', async () => {
      mock.onDelete(`${BASE_URL}/admin/other-lottery/${lotteryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/other-lottery/${lotteryId}`);
      expect(response.status).toBe(200);
    });

    test('GET /admin/other-lottery/{id} should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onGet(`${BASE_URL}/admin/other-lottery/${lotteryId}`).reply(401);
      await expect(axios.get(`${BASE_URL}/admin/other-lottery/${lotteryId}`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Admin - Online Center', () => {
    const centerId = 1;
    const centerOutput = { id: centerId, name: 'Online Center', location: 'Virtual' };
    const centerInput = { name: 'Updated Online Center', location: 'Cloud' };

    test('GET /admin/online-center/{id} should return online center details', async () => {
      mock.onGet(`${BASE_URL}/admin/online-center/${centerId}`).reply(200, centerOutput);
      const response = await axios.get(`${BASE_URL}/admin/online-center/${centerId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(centerOutput);
    });

    test('PUT /admin/online-center/{id} should update online center', async () => {
      mock.onPut(`${BASE_URL}/admin/online-center/${centerId}`).reply(200, { ...centerOutput, ...centerInput });
      const response = await axios.put(`${BASE_URL}/admin/online-center/${centerId}`, centerInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(centerInput.name);
    });

    test('DELETE /admin/online-center/{id} should delete online center', async () => {
      mock.onDelete(`${BASE_URL}/admin/online-center/${centerId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/online-center/${centerId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Online Center Category', () => {
    const categoryId = 1;
    const categoryOutput = { id: categoryId, name: 'Tech Category' };
    const categoryInput = { name: 'Updated Tech Category' };

    test('GET /admin/online-center-category/{id} should return category details', async () => {
      mock.onGet(`${BASE_URL}/admin/online-center-category/${categoryId}`).reply(200, categoryOutput);
      const response = await axios.get(`${BASE_URL}/admin/online-center-category/${categoryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(categoryOutput);
    });

    test('PUT /admin/online-center-category/{id} should update category', async () => {
      mock.onPut(`${BASE_URL}/admin/online-center-category/${categoryId}`).reply(200, { ...categoryOutput, ...categoryInput });
      const response = await axios.put(`${BASE_URL}/admin/online-center-category/${categoryId}`, categoryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(categoryInput.name);
    });

    test('DELETE /admin/online-center-category/{id} should delete category', async () => {
      mock.onDelete(`${BASE_URL}/admin/online-center-category/${categoryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/online-center-category/${categoryId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Missions', () => {
    const missionId = 1;
    const missionOutput = { id: missionId, title: 'Complete Survey', reward: 50 };
    const missionInput = { title: 'Updated Survey', reward: 75 };

    test('GET /admin/missions/{id} should return mission details', async () => {
      mock.onGet(`${BASE_URL}/admin/missions/${missionId}`).reply(200, missionOutput);
      const response = await axios.get(`${BASE_URL}/admin/missions/${missionId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(missionOutput);
    });

    test('PUT /admin/missions/{id} should update mission', async () => {
      mock.onPut(`${BASE_URL}/admin/missions/${missionId}`).reply(200, { ...missionOutput, ...missionInput });
      const response = await axios.put(`${BASE_URL}/admin/missions/${missionId}`, missionInput);
      expect(response.status).toBe(200);
      expect(response.data.title).toBe(missionInput.title);
    });

    test('DELETE /admin/missions/{id} should delete mission', async () => {
      mock.onDelete(`${BASE_URL}/admin/missions/${missionId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/missions/${missionId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Lottery', () => {
    const lotteryId = 1;
    const lotteryOutput = { id: lotteryId, name: 'Main Lottery', prize: 'Car' };
    const lotteryInput = { name: 'Updated Main Lottery', prize: 'Trip' };

    test('GET /admin/lottery/{id} should return lottery details', async () => {
      mock.onGet(`${BASE_URL}/admin/lottery/${lotteryId}`).reply(200, lotteryOutput);
      const response = await axios.get(`${BASE_URL}/admin/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(lotteryOutput);
    });

    test('PUT /admin/lottery/{id} should update lottery', async () => {
      mock.onPut(`${BASE_URL}/admin/lottery/${lotteryId}`).reply(200, { ...lotteryOutput, ...lotteryInput });
      const response = await axios.put(`${BASE_URL}/admin/lottery/${lotteryId}`, lotteryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(lotteryInput.name);
    });

    test('DELETE /admin/lottery/{id} should delete lottery', async () => {
      mock.onDelete(`${BASE_URL}/admin/lottery/${lotteryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Iran Mall Shop', () => {
    const shopId = 1;
    const shopOutput = { id: shopId, name: 'Fashion Store', location: 'Floor 1' };
    const shopInput = { name: 'Updated Fashion Store', location: 'Floor 2' };

    test('GET /admin/iran-mall-shop/{id} should return shop details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-mall-shop/${shopId}`).reply(200, shopOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-mall-shop/${shopId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(shopOutput);
    });

    test('PUT /admin/iran-mall-shop/{id} should update shop', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-mall-shop/${shopId}`).reply(200, { ...shopOutput, ...shopInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-mall-shop/${shopId}`, shopInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(shopInput.name);
    });

    test('DELETE /admin/iran-mall-shop/{id} should delete shop', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-mall-shop/${shopId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-mall-shop/${shopId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Iran Mall Shop Category', () => {
    const categoryId = 1;
    const categoryOutput = { id: categoryId, name: 'Electronics' };
    const categoryInput = { name: 'Updated Electronics' };

    test('GET /admin/iran-mall-shop-category/{id} should return category details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`).reply(200, categoryOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(categoryOutput);
    });

    test('PUT /admin/iran-mall-shop-category/{id} should update category', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`).reply(200, { ...categoryOutput, ...categoryInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`, categoryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(categoryInput.name);
    });

    test('DELETE /admin/iran-mall-shop-category/{id} should delete category', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-mall-shop-category/${categoryId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Iran Mall Conference Hall', () => {
    const hallId = 1;
    const hallOutput = { id: hallId, name: 'Main Hall', capacity: 100 };
    const hallInput = { name: 'Updated Main Hall', capacity: 150 };

    test('GET /admin/iran-mall-conference-hall/{id} should return hall details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`).reply(200, hallOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(hallOutput);
    });

    test('PUT /admin/iran-mall-conference-hall/{id} should update hall', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`).reply(200, { ...hallOutput, ...hallInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`, hallInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(hallInput.name);
    });

    test('DELETE /admin/iran-mall-conference-hall/{id} should delete hall', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-mall-conference-hall/${hallId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Iran Mall Cinema', () => {
    const cinemaId = 1;
    const cinemaOutput = { id: cinemaId, name: 'Cinema 1', screens: 5 };
    const cinemaInput = { name: 'Updated Cinema 1', screens: 6 };

    test('GET /admin/iran-mall-cinema/{id} should return cinema details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`).reply(200, cinemaOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(cinemaOutput);
    });

    test('PUT /admin/iran-mall-cinema/{id} should update cinema', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`).reply(200, { ...cinemaOutput, ...cinemaInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`, cinemaInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(cinemaInput.name);
    });

    test('DELETE /admin/iran-mall-cinema/{id} should delete cinema', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-mall-cinema/${cinemaId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Iran Cards', () => {
    const cardId = 1;
    const cardOutput = { id: cardId, cardNumber: '1234-5678-9012-3456', type: 'Membership' };
    const cardInput = { cardNumber: '9876-5432-1098-7654', type: 'Premium' };

    test('GET /admin/iran-cards/{id} should return card details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-cards/${cardId}`).reply(200, cardOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-cards/${cardId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(cardOutput);
    });

    test('PUT /admin/iran-cards/{id} should update card', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-cards/${cardId}`).reply(200, { ...cardOutput, ...cardInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-cards/${cardId}`, cardInput);
      expect(response.status).toBe(200);
      expect(response.data.cardNumber).toBe(cardInput.cardNumber);
    });
  });

  describe('Admin - Iran Card Feature', () => {
    const featureId = 1;
    const featureOutput = { id: featureId, name: 'Discount', value: '10%' };
    const featureInput = { name: 'Updated Discount', value: '15%' };

    test('GET /admin/iran-card-feature/{id} should return feature details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-card-feature/${featureId}`).reply(200, featureOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-card-feature/${featureId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(featureOutput);
    });

    test('PUT /admin/iran-card-feature/{id} should update feature', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-card-feature/${featureId}`).reply(200, { ...featureOutput, ...featureInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-card-feature/${featureId}`, featureInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(featureInput.name);
    });

    test('DELETE /admin/iran-card-feature/{id} should delete feature', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-card-feature/${featureId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-card-feature/${featureId}`);
      expect(response.status).toBe(200);
    });
  });
});


describe('Club Customer API Tests - Extended Endpoints', () => {
  beforeEach(() => {
    mock.reset();
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  });

  describe('Admin - Iran Card Category', () => {
    const categoryId = 1;
    const categoryOutput = { id: categoryId, name: 'Premium Card' };
    const categoryInput = { name: 'Updated Premium Card' };

    test('GET /admin/iran-card-category/{id} should return category details', async () => {
      mock.onGet(`${BASE_URL}/admin/iran-card-category/${categoryId}`).reply(200, categoryOutput);
      const response = await axios.get(`${BASE_URL}/admin/iran-card-category/${categoryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(categoryOutput);
    });

    test('PUT /admin/iran-card-category/{id} should update category', async () => {
      mock.onPut(`${BASE_URL}/admin/iran-card-category/${categoryId}`).reply(200, { ...categoryOutput, ...categoryInput });
      const response = await axios.put(`${BASE_URL}/admin/iran-card-category/${categoryId}`, categoryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(categoryInput.name);
    });

    test('DELETE /admin/iran-card-category/{id} should delete category', async () => {
      mock.onDelete(`${BASE_URL}/admin/iran-card-category/${categoryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/iran-card-category/${categoryId}`);
      expect(response.status).toBe(200);
    });

    test('GET /admin/iran-card-category/{id} should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onGet(`${BASE_URL}/admin/iran-card-category/${categoryId}`).reply(401);
      await expect(axios.get(`${BASE_URL}/admin/iran-card-category/${categoryId}`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Admin - Internal Online Center', () => {
    const centerId = 1;
    const centerOutput = { id: centerId, name: 'Internal Center', type: 'Private' };
    const centerInput = { name: 'Updated Internal Center', type: 'Restricted' };

    test('GET /admin/internal-online-center/{id} should return center details', async () => {
      mock.onGet(`${BASE_URL}/admin/internal-online-center/${centerId}`).reply(200, centerOutput);
      const response = await axios.get(`${BASE_URL}/admin/internal-online-center/${centerId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(centerOutput);
    });

    test('PUT /admin/internal-online-center/{id} should update center', async () => {
      mock.onPut(`${BASE_URL}/admin/internal-online-center/${centerId}`).reply(200, { ...centerOutput, ...centerInput });
      const response = await axios.put(`${BASE_URL}/admin/internal-online-center/${centerId}`, centerInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(centerInput.name);
    });

    test('DELETE /admin/internal-online-center/{id} should delete center', async () => {
      mock.onDelete(`${BASE_URL}/admin/internal-online-center/${centerId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/internal-online-center/${centerId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Insurance', () => {
    const insuranceId = 1;
    const insuranceOutput = { id: insuranceId, policy: 'Health', premium: 500 };
    const insuranceInput = { policy: 'Updated Health', premium: 600 };

    test('GET /admin/insurance/{id} should return insurance details', async () => {
      mock.onGet(`${BASE_URL}/admin/insurance/${insuranceId}`).reply(200, insuranceOutput);
      const response = await axios.get(`${BASE_URL}/admin/insurance/${insuranceId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(insuranceOutput);
    });

    test('PUT /admin/insurance/{id} should update insurance', async () => {
      mock.onPut(`${BASE_URL}/admin/insurance/${insuranceId}`).reply(200, { ...insuranceOutput, ...insuranceInput });
      const response = await axios.put(`${BASE_URL}/admin/insurance/${insuranceId}`, insuranceInput);
      expect(response.status).toBe(200);
      expect(response.data.policy).toBe(insuranceInput.policy);
    });

    test('DELETE /admin/insurance/{id} should delete insurance', async () => {
      mock.onDelete(`${BASE_URL}/admin/insurance/${insuranceId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/insurance/${insuranceId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Insurance Category', () => {
    const categoryId = 1;
    const categoryOutput = { id: categoryId, name: 'Life Insurance' };
    const categoryInput = { name: 'Updated Life Insurance' };

    test('GET /admin/insurance-category/{id} should return category details', async () => {
      mock.onGet(`${BASE_URL}/admin/insurance-category/${categoryId}`).reply(200, categoryOutput);
      const response = await axios.get(`${BASE_URL}/admin/insurance-category/${categoryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(categoryOutput);
    });

    test('PUT /admin/insurance-category/{id} should update category', async () => {
      mock.onPut(`${BASE_URL}/admin/insurance-category/${categoryId}`).reply(200, { ...categoryOutput, ...categoryInput });
      const response = await axios.put(`${BASE_URL}/admin/insurance-category/${categoryId}`, categoryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(categoryInput.name);
    });

    test('DELETE /admin/insurance-category/{id} should delete category', async () => {
      mock.onDelete(`${BASE_URL}/admin/insurance-category/${categoryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/insurance-category/${categoryId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Increase Score Bank Article', () => {
    const articleId = 1;
    const articleOutput = { id: articleId, title: 'Score Guide', content: 'How to earn points' };
    const articleInput = { title: 'Updated Score Guide', content: 'New ways to earn' };

    test('GET /admin/increase-score-bank-article/{id} should return article details', async () => {
      mock.onGet(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`).reply(200, articleOutput);
      const response = await axios.get(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(articleOutput);
    });

    test('PUT /admin/increase-score-bank-article/{id} should update article', async () => {
      mock.onPut(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`).reply(200, { ...articleOutput, ...articleInput });
      const response = await axios.put(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`, articleInput);
      expect(response.status).toBe(200);
      expect(response.data.title).toBe(articleInput.title);
    });

    test('DELETE /admin/increase-score-bank-article/{id} should delete article', async () => {
      mock.onDelete(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/increase-score-bank-article/${articleId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Customer Levels', () => {
    const levelId = 1;
    const levelOutput = { id: levelId, name: 'Gold', points: 1000 };
    const levelInput = { name: 'Platinum', points: 1500 };

    test('GET /admin/customer-levels/{id} should return level details', async () => {
      mock.onGet(`${BASE_URL}/admin/customer-levels/${levelId}`).reply(200, levelOutput);
      const response = await axios.get(`${BASE_URL}/admin/customer-levels/${levelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(levelOutput);
    });

    test('PUT /admin/customer-levels/{id} should update level', async () => {
      mock.onPut(`${BASE_URL}/admin/customer-levels/${levelId}`).reply(200, { ...levelOutput, ...levelInput });
      const response = await axios.put(`${BASE_URL}/admin/customer-levels/${levelId}`, levelInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(levelInput.name);
    });

    test('DELETE /admin/customer-levels/{id} should delete level', async () => {
      mock.onDelete(`${BASE_URL}/admin/customer-levels/${levelId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/customer-levels/${levelId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Customer Levels Indicator', () => {
    const indicatorId = 1;
    const indicatorOutput = { id: indicatorId, metric: 'Purchases', threshold: 500 };
    const indicatorInput = { metric: 'Updated Purchases', threshold: 600 };

    test('GET /admin/customer-levels-Indicator/{id} should return indicator details', async () => {
      mock.onGet(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`).reply(200, indicatorOutput);
      const response = await axios.get(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(indicatorOutput);
    });

    test('PUT /admin/customer-levels-Indicator/{id} should update indicator', async () => {
      mock.onPut(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`).reply(200, { ...indicatorOutput, ...indicatorInput });
      const response = await axios.put(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`, indicatorInput);
      expect(response.status).toBe(200);
      expect(response.data.metric).toBe(indicatorInput.metric);
    });

    test('DELETE /admin/customer-levels-Indicator/{id} should delete indicator', async () => {
      mock.onDelete(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/customer-levels-Indicator/${indicatorId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Customer Groups', () => {
    const groupId = 1;
    const groupOutput = { id: groupId, name: 'VIP Customers' };
    const groupInput = { name: 'Updated VIP Customers' };

    test('GET /admin/customer-groups/{id} should return group details', async () => {
      mock.onGet(`${BASE_URL}/admin/customer-groups/${groupId}`).reply(200, groupOutput);
      const response = await axios.get(`${BASE_URL}/admin/customer-groups/${groupId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(groupOutput);
    });

    test('PUT /admin/customer-groups/{id} should update group', async () => {
      mock.onPut(`${BASE_URL}/admin/customer-groups/${groupId}`).reply(200, { ...groupOutput, ...groupInput });
      const response = await axios.put(`${BASE_URL}/admin/customer-groups/${groupId}`, groupInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(groupInput.name);
    });
  });

  describe('Admin - Charity', () => {
    const charityId = 1;
    const charityOutput = { id: charityId, name: 'Hope Foundation', cause: 'Education' };
    const charityInput = { name: 'Updated Hope Foundation', cause: 'Healthcare' };

    test('GET /admin/charity/{id} should return charity details', async () => {
      mock.onGet(`${BASE_URL}/admin/charity/${charityId}`).reply(200, charityOutput);
      const response = await axios.get(`${BASE_URL}/admin/charity/${charityId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(charityOutput);
    });

    test('PUT /admin/charity/{id} should update charity', async () => {
      mock.onPut(`${BASE_URL}/admin/charity/${charityId}`).reply(200, { ...charityOutput, ...charityInput });
      const response = await axios.put(`${BASE_URL}/admin/charity/${charityId}`, charityInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(charityInput.name);
    });

    test('DELETE /admin/charity/{id} should delete charity', async () => {
      mock.onDelete(`${BASE_URL}/admin/charity/${charityId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/charity/${charityId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Champions League Lucky Wheel', () => {
    const wheelId = 1;
    const wheelOutput = { id: wheelId, name: 'Lucky Spin', prize: 'Discount' };
    const wheelInput = { name: 'Updated Lucky Spin', prize: 'Gift Card' };

    test('GET /admin/champions-league/lucky-wheel/{id} should return wheel details', async () => {
      mock.onGet(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`).reply(200, wheelOutput);
      const response = await axios.get(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(wheelOutput);
    });

    // test('PUT /admin/champions-league/lucky-wheel/{id} should update wheel', async () => {
    //   mock.onPut(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`).reply(200, { ...wheelOutput, ...wheelInput });
    //   const response = await axios.put(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`, wheelInput);
    //   expect(response.status).toBe(200 Posted: 2023-11-27T09:59:34.750Z

    //   mock.onDelete(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`).reply(200);
    //   const response = await axios.delete(`${BASE_URL}/admin/champions-league/lucky-wheel/${wheelId}`);
    //   expect(response.status).toBe(200);
    // });
  });

  describe('Admin - Champions League Lucky Wheel Item', () => {
    const itemId = 1;
    const itemOutput = { id: itemId, name: 'Prize Item', value: '50 Points' };
    const itemInput = { name: 'Updated Prize Item', value: '100 Points' };

    test('GET /admin/champions-league/lucky-wheel-item/{id} should return item details', async () => {
      mock.onGet(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`).reply(200, itemOutput);
      const response = await axios.get(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(itemOutput);
    });

    test('PUT /admin/champions-league/lucky-wheel-item/{id} should update item', async () => {
      mock.onPut(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`).reply(200, { ...itemOutput, ...itemInput });
      const response = await axios.put(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`, itemInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(itemInput.name);
    });

    test('DELETE /admin/champions-league/lucky-wheel-item/{id} should delete item', async () => {
      mock.onDelete(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/champions-league/lucky-wheel-item/${itemId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Champions League Lottery', () => {
    const lotteryId = 1;
    const lotteryOutput = { id: lotteryId, name: 'Champions Lottery', prize: 'Trip' };
    const lotteryInput = { name: 'Updated Champions Lottery', prize: 'Car' };

    test('GET /admin/champions-league/lottery/{id} should return lottery details', async () => {
      mock.onGet(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`).reply(200, lotteryOutput);
      const response = await axios.get(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(lotteryOutput);
    });

    test('PUT /admin/champions-league/lottery/{id} should update lottery', async () => {
      mock.onPut(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`).reply(200, { ...lotteryOutput, ...lotteryInput });
      const response = await axios.put(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`, lotteryInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(lotteryInput.name);
    });

    test('DELETE /admin/champions-league/lottery/{id} should delete lottery', async () => {
      mock.onDelete(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/champions-league/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Champions League Badge Detail', () => {
    const badgeOutput = { id: 1, description: 'Top Performer' };
    const badgeInput = { description: 'Updated Top Performer' };

    test('GET /admin/champions-league/badge-detail should return badge details', async () => {
      mock.onGet(`${BASE_URL}/admin/champions-league/badge-detail`).reply(200, badgeOutput);
      const response = await axios.get(`${BASE_URL}/admin/champions-league/badge-detail`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(badgeOutput);
    });

    test('PUT /admin/champions-league/badge-detail should update badge details', async () => {
      mock.onPut(`${BASE_URL}/admin/champions-league/badge-detail`).reply(200, { ...badgeOutput, ...badgeInput });
      const response = await axios.put(`${BASE_URL}/admin/champions-league/badge-detail`, badgeInput);
      expect(response.status).toBe(200);
      expect(response.data.description).toBe(badgeInput.description);
    });
  });

  describe('Admin - Banner', () => {
    const bannerId = 1;
    const bannerOutput = { id: bannerId, title: 'Promo Banner', image: 'promo.jpg' };
    const bannerInput = { title: 'Updated Promo Banner', image: 'new_promo.jpg' };

    test('GET /admin/banner/{id} should return banner details', async () => {
      mock.onGet(`${BASE_URL}/admin/banner/${bannerId}`).reply(200, bannerOutput);
      const response = await axios.get(`${BASE_URL}/admin/banner/${bannerId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(bannerOutput);
    });

    test('PUT /admin/banner/{id} should update banner', async () => {
      mock.onPut(`${BASE_URL}/admin/banner/${bannerId}`).reply(200, { ...bannerOutput, ...bannerInput });
      const response = await axios.put(`${BASE_URL}/admin/banner/${bannerId}`, bannerInput);
      expect(response.status).toBe(200);
      expect(response.data.title).toBe(bannerInput.title);
    });

    test('DELETE /admin/banner/{id} should delete banner', async () => {
      mock.onDelete(`${BASE_URL}/admin/banner/${bannerId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/banner/${bannerId}`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - User Branch Level', () => {
    const userBranchId = 1;
    const userLevel = 'MANAGER';
    const branchOutput = { id: userBranchId, level: userLevel };

    test('PUT /admin/api/user-branch/{userBranchId}/level should update user level', async () => {
      mock.onPut(`${BASE_URL}/admin/api/user-branch/${userBranchId}/level?userLevel=${userLevel}`).reply(200, branchOutput);
      const response = await axios.put(`${BASE_URL}/admin/api/user-branch/${userBranchId}/level?userLevel=${userLevel}`);
      expect(response.status).toBe(200);
      expect(response.data.level).toBe(userLevel);
    });
  });

  describe('Admin - Admin Management', () => {
    const adminId = 1;
    const adminOutput = { id: adminId, name: 'Admin User', email: 'admin@example.com' };
    const adminInput = { name: 'Updated Admin', email: 'updated@example.com' };
    const passwordInput = { password: 'newPassword123' };

    test('GET /admin/admin-management/{id} should return admin details', async () => {
      mock.onGet(`${BASE_URL}/admin/admin-management/${adminId}`).reply(200, adminOutput);
      const response = await axios.get(`${BASE_URL}/admin/admin-management/${adminId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(adminOutput);
    });

    test('PUT /admin/admin-management/{id} should update admin', async () => {
      mock.onPut(`${BASE_URL}/admin/admin-management/${adminId}`).reply(200, { ...adminOutput, ...adminInput });
      const response = await axios.put(`${BASE_URL}/admin/admin-management/${adminId}`, adminInput);
      expect(response.status).toBe(200);
      expect(response.data.name).toBe(adminInput.name);
    });

    test('DELETE /admin/admin-management/{id} should delete admin', async () => {
      mock.onDelete(`${BASE_URL}/admin/admin-management/${adminId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/admin/admin-management/${adminId}`);
      expect(response.status).toBe(200);
    });

    test('PUT /admin/admin-management/{id}/change-password should change password', async () => {
      mock.onPut(`${BASE_URL}/admin/admin-management/${adminId}/change-password`).reply(200);
      const response = await axios.put(`${BASE_URL}/admin/admin-management/${adminId}/change-password`, passwordInput);
      expect(response.status).toBe(200);
    });
  });

  describe('User Information', () => {
    const customerId = 'CUST123';
    const userInfoOutput = { id: customerId, name: 'John Doe', email: 'john@example.com' };

    test('POST /user-information should return user information', async () => {
      mock.onPost(`${BASE_URL}/user-information?customerId=${customerId}`).reply(200, userInfoOutput);
      const response = await axios.post(`${BASE_URL}/user-information?customerId=${customerId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(userInfoOutput);
    });
  });

  describe('Rules Engine - Score Types', () => {
    const scoreTypeOutput = { id: 1, name: 'Bonus Points', active: true };
    const scoreTypeInput = { name: 'Updated Bonus Points', active: false };
    const pageOutput = { content: [scoreTypeOutput], totalElements: 1, totalPages: 1 };

    test('GET /rules-engine/score-types should return score types', async () => {
      mock.onGet(`${BASE_URL}/rules-engine/score-types`, { params: { pageable: { page: 0, size: 10 } } }).reply(200, pageOutput);
      const response = await axios.get(`${BASE_URL}/rules-engine/score-types`, { params: { pageable: { page: 0, size: 10 } } });
      expect(response.status).toBe(200);
      expect(response.data.content).toContainEqual(scoreTypeOutput);
    });

    test('POST /rules-engine/score-types should create score type', async () => {
      mock.onPost(`${BASE_URL}/rules-engine/score-types`).reply(200, scoreTypeOutput);
      const response = await axios.post(`${BASE_URL}/rules-engine/score-types`, scoreTypeInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(scoreTypeOutput);
    });
  });

  describe('Rules Engine - Rule Configs', () => {
    const ruleConfigOutput = { id: 1, ruleName: 'Purchase Rule', active: true };
    const ruleConfigInput = { ruleName: 'Updated Purchase Rule', active: false };
    const pageOutput = { content: [ruleConfigOutput], totalElements: 1, totalPages: 1 };

    test('GET /rules-engine/rule-configs should return rule configs', async () => {
      mock.onGet(`${BASE_URL}/rules-engine/rule-configs`, { params: { pageable: { page: 0, size: 10 } } }).reply(200, pageOutput);
      const response = await axios.get(`${BASE_URL}/rules-engine/rule-configs`, { params: { pageable: { page: 0, size: 10 } } });
      expect(response.status).toBe(200);
      expect(response.data.content).toContainEqual(ruleConfigOutput);
    });

    test('POST /rules-engine/rule-configs should create rule config', async () => {
      mock.onPost(`${BASE_URL}/rules-engine/rule-configs`).reply(200, ruleConfigOutput);
      const response = await axios.post(`${BASE_URL}/rules-engine/rule-configs`, ruleConfigInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ruleConfigOutput);
    });
  });

  describe('Member - Voting', () => {
    const votingOutput = [{ id: 1, question: 'Best Product?', answer: 'Product A' }];
    const votingInput = [{ id: 1, answer: 'Product B' }];
    const votingAnswerOutput = { id: 1, answer: 'Product B' };

    test('GET /member/voting should return active votings', async () => {
      mock.onGet(`${BASE_URL}/member/voting`).reply(200, votingOutput);
      const response = await axios.get(`${BASE_URL}/member/voting`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput);
    });

    test('POST /member/voting should update voting answer', async () => {
      mock.onPost(`${BASE_URL}/member/voting`).reply(200, votingAnswerOutput);
      const response = await axios.post(`${BASE_URL}/member/voting`, votingInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingAnswerOutput);
    });
  });

  describe('Member - Profile Gift Transfer', () => {
    const giftId = 1;
    const giftOutput = { id: giftId, bill: 'GIFT123' };

    test('POST /member/profile/gift/{id}/transfer should transfer gift', async () => {
      mock.onPost(`${BASE_URL}/member/profile/gift/${giftId}/transfer`).reply(200, giftOutput);
      const response = await axios.post(`${BASE_URL}/member/profile/gift/${giftId}/transfer`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(giftOutput);
    });
  });

  describe('Member - Profile Gift Check', () => {
    const giftInput = { giftCode: 'GIFT123' };
    const giftOutput = { valid: true, value: 50 };

    test('POST /member/profile/gift/check should check gift', async () => {
      mock.onPost(`${BASE_URL}/member/profile/gift/check`).reply(200, giftOutput);
      const response = await axios.post(`${BASE_URL}/member/profile/gift/check`, giftInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(giftOutput);
    });
  });

  describe('Member - Profile Favorite Answer', () => {
    const answerInput = [{ questionId: 1, answer: 'Blue' }];
    const answerOutput = [{ questionId: 1, answer: 'Blue' }];

    test('POST /member/profile/favorite/answer should update favorite answer', async () => {
      mock.onPost(`${BASE_URL}/member/profile/favorite/answer`).reply(200, answerOutput);
      const response = await axios.post(`${BASE_URL}/member/profile/favorite/answer`, answerInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(answerOutput);
    });
  });

  describe('Member - Profile Change Password', () => {
    const passwordInput = { oldPassword: 'oldPass123', newPassword: 'newPass123' };

    test('POST /member/profile/change-password should change password', async () => {
      mock.onPost(`${BASE_URL}/member/profile/change-password`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/profile/change-password`, passwordInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Online Center Purchase', () => {
    const centerId = 1;
    const internal = true;
    const purchaseOutput = { id: centerId, ticket: 'TICKET123' };

    test('POST /member/online-center/{id}/{internal}/purchase should purchase ticket', async () => {
      mock.onPost(`${BASE_URL}/member/online-center/${centerId}/${internal}/purchase`).reply(200, purchaseOutput);
      const response = await axios.post(`${BASE_URL}/member/online-center/${centerId}/${internal}/purchase`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(purchaseOutput);
    });
  });

  describe('Member - Online Center Comment', () => {
    const centerId = 1;
    const internal = true;
    const commentInput = { comment: 'Great service!' };

    test('POST /member/online-center/{id}/{internal}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/online-center/${centerId}/${internal}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/online-center/${centerId}/${internal}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Notification', () => {
    const notificationId = 1;
    const notificationOutput = { id: notificationId, message: 'New offer available' };

    test('GET /member/notification/{id} should return notification details', async () => {
      mock.onGet(`${BASE_URL}/member/notification/${notificationId}`).reply(200, notificationOutput);
      const response = await axios.get(`${BASE_URL}/member/notification/${notificationId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(notificationOutput);
    });

    test('POST /member/notification/{id} should mark notification as seen', async () => {
      mock.onPost(`${BASE_URL}/member/notification/${notificationId}`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/notification/${notificationId}`);
      expect(response.status).toBe(200);
    });

    test('DELETE /member/notification/{id} should delete notification', async () => {
      mock.onDelete(`${BASE_URL}/member/notification/${notificationId}`).reply(200);
      const response = await axios.delete(`${BASE_URL}/member/notification/${notificationId}`);
      expect(response.status).toBe(200);
    });
  });
});

describe('Club Customer API Tests - Final Endpoints', () => {
  beforeEach(() => {
    mock.reset();
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
  });

  describe('Member - Missions', () => {
    const missionId = 1;

    test('POST /member/missions/all-missions/{id}/participate should participate in mission', async () => {
      mock.onPost(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`);
      expect(response.status).toBe(200);
    });

    test('POST /member/missions/all-missions/{id}/participate should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`).reply(401);
      await expect(axios.post(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Member - Lucky Wheel', () => {
    const wheelId = 1;
    const wheelOutput = { id: wheelId, name: 'Lucky Spin', prize: 'Discount' };
    const wheelItemOutput = { id: 1, item: '50 Points' };

    test('GET /member/lucky-wheel/{id} should return lucky wheel details', async () => {
      mock.onGet(`${BASE_URL}/member/lucky-wheel/${wheelId}`).reply(200, wheelOutput);
      const response = await axios.get(`${BASE_URL}/member/lucky-wheel/${wheelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(wheelOutput);
    });

    test('POST /member/lucky-wheel/{id} should participate in lucky wheel', async () => {
      mock.onPost(`${BASE_URL}/member/lucky-wheel/${wheelId}`).reply(200, wheelItemOutput);
      const response = await axios.post(`${BASE_URL}/member/lucky-wheel/${wheelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(wheelItemOutput);
    });
  });

  describe('Member - Lottery', () => {
    const lotteryId = 1;
    const lotteryOutput = { id: lotteryId, name: 'Weekly Lottery', prize: 'Gift Card' };
    const scoreInput = { score: 100 };
    const participateOutput = { id: lotteryId, status: 'Participated' };

    test('GET /member/lottery/{id} should return lottery details', async () => {
      mock.onGet(`${BASE_URL}/member/lottery/${lotteryId}`).reply(200, lotteryOutput);
      const response = await axios.get(`${BASE_URL}/member/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(lotteryOutput);
    });

    test('POST /member/lottery/{id} should participate in lottery', async () => {
      mock.onPost(`${BASE_URL}/member/lottery/${lotteryId}`).reply(200, participateOutput);
      const response = await axios.post(`${BASE_URL}/member/lottery/${lotteryId}`, scoreInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(participateOutput);
    });
  });

  describe('Member - Iran Mall Shop Comment', () => {
    const shopId = 1;
    const commentInput = { comment: 'Great shop!' };

    test('POST /member/iran-mall-shop/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/iran-mall-shop/${shopId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/iran-mall-shop/${shopId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Iran Mall Cinema Purchase', () => {
    const cinemaId = 1;
    const ticketOutput = { id: cinemaId, ticket: 'TICKET123' };

    test('POST /member/iran-mall-cinema/{id}/purchase should purchase ticket', async () => {
      mock.onPost(`${BASE_URL}/member/iran-mall-cinema/${cinemaId}/purchase`).reply(200, ticketOutput);
      const response = await axios.post(`${BASE_URL}/member/iran-mall-cinema/${cinemaId}/purchase`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ticketOutput);
    });
  });

  describe('Member - Iran Card Feature Comment', () => {
    const featureId = 1;
    const commentInput = { comment: 'Useful feature!' };

    test('POST /member/iran-card-feature/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/iran-card-feature/${featureId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/iran-card-feature/${featureId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Insurance Purchase', () => {
    const insuranceId = 1;
    const ticketOutput = { id: insuranceId, ticket: 'INS123' };

    test('POST /member/insurance/{id}/purchase should purchase insurance ticket', async () => {
      mock.onPost(`${BASE_URL}/member/insurance/${insuranceId}/purchase`).reply(200, ticketOutput);
      const response = await axios.post(`${BASE_URL}/member/insurance/${insuranceId}/purchase`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ticketOutput);
    });
  });

  describe('Member - Insurance Comment', () => {
    const insuranceId = 1;
    const commentInput = { comment: 'Good coverage!' };

    test('POST /member/insurance/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/insurance/${insuranceId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/insurance/${insuranceId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - File Upload', () => {
    const fileInput = { file: 'mock-file-data', description: 'Test file', directoryId: 1 };
    const fileOutput = { id: 1, name: 'test.txt', description: 'Test file' };

    test('POST /member/file should upload file', async () => {
      mock.onPost(`${BASE_URL}/member/file?description=${fileInput.description}&directoryId=${fileInput.directoryId}`).reply(200, fileOutput);
      const response = await axios.post(`${BASE_URL}/member/file?description=${fileInput.description}&directoryId=${fileInput.directoryId}`, fileInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(fileOutput);
    });
  });

  describe('Member - Directory', () => {
    const directoryInput = { name: 'Documents' };
    const directoryOutput = { id: 1, name: 'Documents' };

    test('POST /member/directory should create directory', async () => {
      mock.onPost(`${BASE_URL}/member/directory`).reply(200, directoryOutput);
      const response = await axios.post(`${BASE_URL}/member/directory`, directoryInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(directoryOutput);
    });
  });

  describe('Member - Charity', () => {
    const charityId = 1;
    const charityOutput = { id: charityId, name: 'Hope Foundation' };
    const scoreInput = { score: 50 };
    const donateOutput = { id: charityId, donatedScore: 50 };

    test('GET /member/charity/{id} should return charity details', async () => {
      mock.onGet(`${BASE_URL}/member/charity/${charityId}`).reply(200, charityOutput);
      const response = await axios.get(`${BASE_URL}/member/charity/${charityId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(charityOutput);
    });

    test('POST /member/charity/{id} should donate score', async () => {
      mock.onPost(`${BASE_URL}/member/charity/${charityId}`).reply(200, donateOutput);
      const response = await axios.post(`${BASE_URL}/member/charity/${charityId}`, scoreInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(donateOutput);
    });
  });

  describe('Member - Bill Payment Transfer', () => {
    const billId = 1;
    const billOutput = { id: billId, voucher: 'VOUCHER123' };

    test('POST /member/bill-payment/{id}/transfer should submit bill', async () => {
      mock.onPost(`${BASE_URL}/member/bill-payment/${billId}/transfer`).reply(200, billOutput);
      const response = await axios.post(`${BASE_URL}/member/bill-payment/${billId}/transfer`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(billOutput);
    });
  });

  describe('Member - Bill Payment Check', () => {
    const billInput = { billId: 'BILL123', amount: 100 };
    const billOutput = { billId: 'BILL123', status: 'Valid' };

    test('POST /member/bill-payment/check should verify bill', async () => {
      mock.onPost(`${BASE_URL}/member/bill-payment/check`).reply(200, billOutput);
      const response = await axios.post(`${BASE_URL}/member/bill-payment/check`, billInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(billOutput);
    });
  });

  describe('Authentication - WS Login', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/ws-login should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/ws-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/ws-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Verify Phone Number', () => {
    const verifyInput = { phone: '1234567890', otp: '123456' };
    const verifyOutput = { verified: true };

    test('POST /auth/verify-phone-number should verify phone', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/verify-phone-number`).reply(200, verifyOutput);
      const response = await axios.post(`${BASE_URL}/auth/verify-phone-number`, verifyInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(verifyOutput);
    });
  });

  describe('Authentication - Validate Captcha', () => {
    const captchaInput = { captcha: 'abc123' };
    const captchaOutput = true;

    test('POST /auth/valid-captcha should validate captcha', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/valid-captcha`).reply(200, captchaOutput);
      const response = await axios.post(`${BASE_URL}/auth/valid-captcha`, captchaInput);
      expect(response.status).toBe(200);
      expect(response.data).toBe(captchaOutput);
    });
  });

  describe('Authentication - Set Password', () => {
    const passwordInput = { password: 'newPass123' };

    test('POST /auth/set-password should set password', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/set-password`).reply(200);
      const response = await axios.post(`${BASE_URL}/auth/set-password`, passwordInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Authentication - Send OTP', () => {
    const otpInput = { phone: '1234567890' };
    const otpOutput = { status: 'Sent' };

    test('POST /auth/send-otp should send OTP', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/send-otp`).reply(200, otpOutput);
      const response = await axios.post(`${BASE_URL}/auth/send-otp`, otpInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(otpOutput);
    });
  });

  describe('Authentication - Rules Engine Login', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/rules-engine-login should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/rules-engine-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/rules-engine-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Register User', () => {
    const registerInput = { username: 'user', password: 'pass', phone: '1234567890' };
    const registerOutput = { status: 'Registered' };

    test('POST /auth/register-user should register user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/register-user`).reply(200, registerOutput);
      const response = await axios.post(`${BASE_URL}/auth/register-user`, registerInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(registerOutput);
    });
  });

  describe('Authentication - Login with Password', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/login-with-password should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/login-with-password`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/login-with-password`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Login with OTP', () => {
    const loginInput = { phone: '1234567890', otp: '123456' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/login-with-otp should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/login-with-otp`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/login-with-otp`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Branch Login', () => {
    const loginInput = { username: 'branch', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/branch-login should login branch', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/branch-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/branch-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Admin Login', () => {
    const loginInput = { username: 'admin', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/admin-login should login admin', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/admin-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/admin-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Admin - Voting', () => {
    const votingOutput = [{ id: 1, question: 'Best Service?', active: true }];
    const votingInput = { question: 'Best Service?', options: ['A', 'B'] };

    test('GET /admin/voting should return all votings', async () => {
      mock.onGet(`${BASE_URL}/admin/voting`).reply(200, votingOutput);
      const response = await axios.get(`${BASE_URL}/admin/voting`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput);
    });

    test('POST /admin/voting should create voting', async () => {
      mock.onPost(`${BASE_URL}/admin/voting`).reply(200, votingOutput[0]);
      const response = await axios.post(`${BASE_URL}/admin/voting`, votingInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput[0]);
    });
  });

  describe('Admin - Version Note', () => {
    const versionType = 'APP';
    const versionOutput = [{ id: 1, version: '1.0.0', notes: 'Initial release' }];
    const versionInput = { version: '1.0.0', notes: 'Initial release', type: 'APP' };

    test('GET /admin/version-note should return version notes', async () => {
      mock.onGet(`${BASE_URL}/admin/version-note?versionType=${versionType}`).reply(200, versionOutput);
      const response = await axios.get(`${BASE_URL}/admin/version-note?versionType=${versionType}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(versionOutput);
    });

    test('POST /admin/version-note should create version note', async () => {
      mock.onPost(`${BASE_URL}/admin/version-note`).reply(200, versionOutput[0]);
      const response = await axios.post(`${BASE_URL}/admin/version-note`, versionInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(versionOutput[0]);
    });
  });

  describe('Admin - User Settings Delete Profile Picture', () => {
    const userId = 1;

    test('POST /admin/user-settings/{id}/delete-profile-picture should delete profile picture', async () => {
      mock.onPost(`${BASE_URL}/admin/user-settings/${userId}/delete-profile-picture`).reply(200);
      const response = await axios.post(`${BASE_URL}/admin/user-settings/${userId}/delete-profile-picture`);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Missions', () => {
    const missionId = 1;

    test('POST /member/missions/all-missions/{id}/participate should participate in mission', async () => {
      mock.onPost(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`);
      expect(response.status).toBe(200);
    });

    test('POST /member/missions/all-missions/{id}/participate should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`).reply(401);
      await expect(axios.post(`${BASE_URL}/member/missions/all-missions/${missionId}/participate`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Member - Lucky Wheel', () => {
    const wheelId = 1;
    const wheelOutput = { id: wheelId, name: 'Lucky Spin', prize: 'Discount' };
    const wheelItemOutput = { id: 1, item: '50 Points' };

    test('GET /member/lucky-wheel/{id} should return lucky wheel details', async () => {
      mock.onGet(`${BASE_URL}/member/lucky-wheel/${wheelId}`).reply(200, wheelOutput);
      const response = await axios.get(`${BASE_URL}/member/lucky-wheel/${wheelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(wheelOutput);
    });

    test('POST /member/lucky-wheel/{id} should participate in lucky wheel', async () => {
      mock.onPost(`${BASE_URL}/member/lucky-wheel/${wheelId}`).reply(200, wheelItemOutput);
      const response = await axios.post(`${BASE_URL}/member/lucky-wheel/${wheelId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(wheelItemOutput);
    });
  });

  describe('Member - Lottery', () => {
    const lotteryId = 1;
    const lotteryOutput = { id: lotteryId, name: 'Weekly Lottery', prize: 'Gift Card' };
    const scoreInput = { score: 100 };
    const participateOutput = { id: lotteryId, status: 'Participated' };

    test('GET /member/lottery/{id} should return lottery details', async () => {
      mock.onGet(`${BASE_URL}/member/lottery/${lotteryId}`).reply(200, lotteryOutput);
      const response = await axios.get(`${BASE_URL}/member/lottery/${lotteryId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(lotteryOutput);
    });

    test('POST /member/lottery/{id} should participate in lottery', async () => {
      mock.onPost(`${BASE_URL}/member/lottery/${lotteryId}`).reply(200, participateOutput);
      const response = await axios.post(`${BASE_URL}/member/lottery/${lotteryId}`, scoreInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(participateOutput);
    });
  });

  describe('Member - Iran Mall Shop Comment', () => {
    const shopId = 1;
    const commentInput = { comment: 'Great shop!' };

    test('POST /member/iran-mall-shop/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/iran-mall-shop/${shopId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/iran-mall-shop/${shopId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Iran Mall Cinema Purchase', () => {
    const cinemaId = 1;
    const ticketOutput = { id: cinemaId, ticket: 'TICKET123' };

    test('POST /member/iran-mall-cinema/{id}/purchase should purchase ticket', async () => {
      mock.onPost(`${BASE_URL}/member/iran-mall-cinema/${cinemaId}/purchase`).reply(200, ticketOutput);
      const response = await axios.post(`${BASE_URL}/member/iran-mall-cinema/${cinemaId}/purchase`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ticketOutput);
    });
  });

  describe('Member - Iran Card Feature Comment', () => {
    const featureId = 1;
    const commentInput = { comment: 'Useful feature!' };

    test('POST /member/iran-card-feature/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/iran-card-feature/${featureId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/iran-card-feature/${featureId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - Insurance Purchase', () => {
    const insuranceId = 1;
    const ticketOutput = { id: insuranceId, ticket: 'INS123' };

    test('POST /member/insurance/{id}/purchase should purchase insurance ticket', async () => {
      mock.onPost(`${BASE_URL}/member/insurance/${insuranceId}/purchase`).reply(200, ticketOutput);
      const response = await axios.post(`${BASE_URL}/member/insurance/${insuranceId}/purchase`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(ticketOutput);
    });
  });

  describe('Member - Insurance Comment', () => {
    const insuranceId = 1;
    const commentInput = { comment: 'Good coverage!' };

    test('POST /member/insurance/{id}/comment should post comment', async () => {
      mock.onPost(`${BASE_URL}/member/insurance/${insuranceId}/comment`).reply(200);
      const response = await axios.post(`${BASE_URL}/member/insurance/${insuranceId}/comment`, commentInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Member - File Upload', () => {
    const fileInput = { file: 'mock-file-data', description: 'Test file', directoryId: 1 };
    const fileOutput = { id: 1, name: 'test.txt', description: 'Test file' };

    test('POST /member/file should upload file', async () => {
      mock.onPost(`${BASE_URL}/member/file?description=${fileInput.description}&directoryId=${fileInput.directoryId}`).reply(200, fileOutput);
      const response = await axios.post(`${BASE_URL}/member/file?description=${fileInput.description}&directoryId=${fileInput.directoryId}`, fileInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(fileOutput);
    });
  });

  describe('Member - Directory', () => {
    const directoryInput = { name: 'Documents' };
    const directoryOutput = { id: 1, name: 'Documents' };

    test('POST /member/directory should create directory', async () => {
      mock.onPost(`${BASE_URL}/member/directory`).reply(200, directoryOutput);
      const response = await axios.post(`${BASE_URL}/member/directory`, directoryInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(directoryOutput);
    });
  });

  describe('Member - Charity', () => {
    const charityId = 1;
    const charityOutput = { id: charityId, name: 'Hope Foundation' };
    const scoreInput = { score: 50 };
    const donateOutput = { id: charityId, donatedScore: 50 };

    test('GET /member/charity/{id} should return charity details', async () => {
      mock.onGet(`${BASE_URL}/member/charity/${charityId}`).reply(200, charityOutput);
      const response = await axios.get(`${BASE_URL}/member/charity/${charityId}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(charityOutput);
    });

    test('POST /member/charity/{id} should donate score', async () => {
      mock.onPost(`${BASE_URL}/member/charity/${charityId}`).reply(200, donateOutput);
      const response = await axios.post(`${BASE_URL}/member/charity/${charityId}`, scoreInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(donateOutput);
    });
  });

  describe('Member - Bill Payment Transfer', () => {
    const billId = 1;
    const billOutput = { id: billId, voucher: 'VOUCHER123' };

    test('POST /member/bill-payment/{id}/transfer should submit bill', async () => {
      mock.onPost(`${BASE_URL}/member/bill-payment/${billId}/transfer`).reply(200, billOutput);
      const response = await axios.post(`${BASE_URL}/member/bill-payment/${billId}/transfer`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(billOutput);
    });
  });

  describe('Member - Bill Payment Check', () => {
    const billInput = { billId: 'BILL123', amount: 100 };
    const billOutput = { billId: 'BILL123', status: 'Valid' };

    test('POST /member/bill-payment/check should verify bill', async () => {
      mock.onPost(`${BASE_URL}/member/bill-payment/check`).reply(200, billOutput);
      const response = await axios.post(`${BASE_URL}/member/bill-payment/check`, billInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(billOutput);
    });
  });

  describe('Authentication - WS Login', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/ws-login should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/ws-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/ws-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Verify Phone Number', () => {
    const verifyInput = { phone: '1234567890', otp: '123456' };
    const verifyOutput = { verified: true };

    test('POST /auth/verify-phone-number should verify phone', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/verify-phone-number`).reply(200, verifyOutput);
      const response = await axios.post(`${BASE_URL}/auth/verify-phone-number`, verifyInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(verifyOutput);
    });
  });

  describe('Authentication - Validate Captcha', () => {
    const captchaInput = { captcha: 'abc123' };
    const captchaOutput = true;

    test('POST /auth/valid-captcha should validate captcha', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/valid-captcha`).reply(200, captchaOutput);
      const response = await axios.post(`${BASE_URL}/auth/valid-captcha`, captchaInput);
      expect(response.status).toBe(200);
      expect(response.data).toBe(captchaOutput);
    });
  });

  describe('Authentication - Set Password', () => {
    const passwordInput = { password: 'newPass123' };

    test('POST /auth/set-password should set password', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/set-password`).reply(200);
      const response = await axios.post(`${BASE_URL}/auth/set-password`, passwordInput);
      expect(response.status).toBe(200);
    });
  });

  describe('Authentication - Send OTP', () => {
    const otpInput = { phone: '1234567890' };
    const otpOutput = { status: 'Sent' };

    test('POST /auth/send-otp should send OTP', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/send-otp`).reply(200, otpOutput);
      const response = await axios.post(`${BASE_URL}/auth/send-otp`, otpInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(otpOutput);
    });
  });

  describe('Authentication - Rules Engine Login', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/rules-engine-login should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/rules-engine-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/rules-engine-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Register User', () => {
    const registerInput = { username: 'user', password: 'pass', phone: '1234567890' };
    const registerOutput = { status: 'Registered' };

    test('POST /auth/register-user should register user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/register-user`).reply(200, registerOutput);
      const response = await axios.post(`${BASE_URL}/auth/register-user`, registerInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(registerOutput);
    });
  });

  describe('Authentication - Login with Password', () => {
    const loginInput = { username: 'user', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/login-with-password should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/login-with-password`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/login-with-password`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Login with OTP', () => {
    const loginInput = { phone: '1234567890', otp: '123456' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/login-with-otp should login user', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/login-with-otp`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/login-with-otp`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Branch Login', () => {
    const loginInput = { username: 'branch', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/branch-login should login branch', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/branch-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/branch-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Authentication - Admin Login', () => {
    const loginInput = { username: 'admin', password: 'pass' };
    const loginOutput = { token: 'jwt-token' };

    test('POST /auth/admin-login should login admin', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onPost(`${BASE_URL}/auth/admin-login`).reply(200, loginOutput);
      const response = await axios.post(`${BASE_URL}/auth/admin-login`, loginInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(loginOutput);
    });
  });

  describe('Admin - Voting', () => {
    const votingOutput = [{ id: 1, question: 'Best Service?', active: true }];
    const votingInput = { question: 'Best Service?', options: ['A', 'B'] };

    test('GET /admin/voting should return all votings', async () => {
      mock.onGet(`${BASE_URL}/admin/voting`).reply(200, votingOutput);
      const response = await axios.get(`${BASE_URL}/admin/voting`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput);
    });

    test('POST /admin/voting should create voting', async () => {
      mock.onPost(`${BASE_URL}/admin/voting`).reply(200, votingOutput[0]);
      const response = await axios.post(`${BASE_URL}/admin/voting`, votingInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(votingOutput[0]);
    });
  });

  describe('Admin - Version Note', () => {
    const versionType = 'APP';
    const versionOutput = [{ id: 1, version: '1.0.0', notes: 'Initial release' }];
    const versionInput = { version: '1.0.0', notes: 'Initial release', type: 'APP' };

    test('GET /admin/version-note should return version notes', async () => {
      mock.onGet(`${BASE_URL}/admin/version-note?versionType=${versionType}`).reply(200, versionOutput);
      const response = await axios.get(`${BASE_URL}/admin/version-note?versionType=${versionType}`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(versionOutput);
    });

    test('POST /admin/version-note should create version note', async () => {
      mock.onPost(`${BASE_URL}/admin/version-note`).reply(200, versionOutput[0]);
      const response = await axios.post(`${BASE_URL}/admin/version-note`, versionInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(versionOutput[0]);
    });
  });

  describe('Admin - User Settings Delete Profile Picture', () => {
    const userId = 1;

    test('POST /admin/user-settings/{id}/delete-profile-picture should delete profile picture', async () => {
      mock.onPost(`${BASE_URL}/admin/user-settings/${userId}/delete-profile-picture`).reply(200);
      const response = await axios.post(`${BASE_URL}/admin/user-settings/${userId}/delete-profile-picture`);
      expect(response.status).toBe(200);
    });
  });

  describe('Admin - Spend Score Bank Article', () => {
    const articleOutput = [{ id: 1, title: 'Spending Points', content: 'Guide to spend points' }];
    const articleInput = { title: 'Spending Points', content: 'Guide to spend points' };

    test('GET /admin/spend-score-bank-article should return all articles', async () => {
      mock.onGet(`${BASE_URL}/admin/spend-score-bank-article`).reply(200, articleOutput);
      const response = await axios.get(`${BASE_URL}/admin/spend-score-bank-article`);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(articleOutput);
    });

    test('POST /admin/spend-score-bank-article should create article', async () => {
      mock.onPost(`${BASE_URL}/admin/spend-score-bank-article`).reply(200, articleOutput[0]);
      const response = await axios.post(`${BASE_URL}/admin/spend-score-bank-article`, articleInput);
      expect(response.status).toBe(200);
      expect(response.data).toEqual(articleOutput[0]);
    });

    test('GET /admin/spend-score-bank-article should return 401 without token', async () => {
      delete axios.defaults.headers.common['Authorization'];
      mock.onGet(`${BASE_URL}/admin/spend-score-bank-article`).reply(401);
      await expect(axios.get(`${BASE_URL}/admin/spend-score-bank-article`)).rejects.toThrow('Request failed with status code 401');
    });
  });

  describe('Admin - Manual Score Update', () => {
    const pageOutput = { content: [{ id: 1, score: 100, userId: 1 }], totalElements: 1, totalPages: 1 };
    const scoreInput = 'Score update request';

    test('GET /admin/score/manual should return manual score updates', async () => {
      mock.onGet(`${BASE_URL}/admin/score/manual`, { params: { pageable: { page: 0, size: 10 } } }).reply(200, pageOutput);
      const response = await axios.get(`${BASE_URL}/admin/score/manual`, { params: { pageable: { page: 0, size: 10 } } });
      expect(response.status).toBe(200);
      expect(response.data).toEqual(pageOutput);
    });

    test('POST /admin/score/manual should create score update request', async () => {
      mock.onPost(`${BASE_URL}/admin/score/manual`).reply(200);
      const response = await axios.post(`${BASE_URL}/admin/score/manual`, scoreInput);
      expect(response.status).toBe(200);
    });
  });
});



// const request = require('supertest');
// const app = require('../app'); // Adjust path to your app

describe('Admin API Endpoints', () => {
  describe('GET /admin/score/manual', () => {
    it('should return paginated manual update scores', async () => {
      const response = await request(app)
        .get('/admin/score/manual')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('POST /admin/score/manual', () => {
    it('should create a new update request', async () => {
      const response = await request(app)
        .post('/admin/score/manual')
        .send('update request data')
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
    });
  });

  describe('GET /admin/rule/offline', () => {
    it('should return array of offline rule scores', async () => {
      const response = await request(app).get('/admin/rule/offline');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/rule/offline', () => {
    it('should create a new offline rule', async () => {
      const response = await request(app)
        .post('/admin/rule/offline')
        .send({ /* RequestCalculateScoreRequestDTO mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on actual response
    });
  });

  describe('POST /admin/rule/offline/files/upload', () => {
    it('should upload a file', async () => {
      const response = await request(app)
        .post('/admin/rule/offline/files/upload')
        .query({ fileName: 'test.txt', requestId: 1 })
        .send({ file: 'binary data' })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('fileId'); // Adjust based on GroupFileUploadResponseDTO
    });
  });

  describe('POST /admin/report/users-score', () => {
    it('should filter users score', async () => {
      const response = await request(app)
        .post('/admin/report/users-score')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportUsersScoreInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/users-missions', () => {
    it('should filter users missions', async () => {
      const response = await request(app)
        .post('/admin/report/users-missions')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportChampionsLeagueMissionInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/users-gem', () => {
    it('should filter users gems', async () => {
      const response = await request(app)
        .post('/admin/report/users-gem')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportUsersGemInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/user-badge', () => {
    it('should filter user badges', async () => {
      const response = await request(app)
        .post('/admin/report/user-badge')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportUserBadgeInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/unregister-users', () => {
    it('should filter unregistered users', async () => {
      const response = await request(app)
        .post('/admin/report/unregister-users')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportUnregisterUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/lucky-wheel-participate-user', () => {
    it('should filter lucky wheel participants', async () => {
      const response = await request(app)
        .post('/admin/report/lucky-wheel-participate-user')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportLuckyWheelParticipateInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/login-user', () => {
    it('should filter login users', async () => {
      const response = await request(app)
        .post('/admin/report/login-user')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportLoginUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/last-update', () => {
    it('should fetch max history date', async () => {
      const response = await request(app)
        .post('/admin/report/last-update');

      expect(response.status).toBe(200);
      expect(typeof response.body).toBe('number');
    });
  });

  describe('POST /admin/report/gift-user', () => {
    it('should filter gift users', async () => {
      const response = await request(app)
        .post('/admin/report/gift-user')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportGiftUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/cumulative', () => {
    it('should filter cumulative score', async () => {
      const response = await request(app)
        .post('/admin/report/cumulative')
        .send({ /* ReportCumulativeInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('score'); // Adjust based on ReportCumulativeOutput
    });
  });

  describe('POST /admin/report/champions-league-lottery-participate', () => {
    it('should filter champions league lottery participants', async () => {
      const response = await request(app)
        .post('/admin/report/champions-league-lottery-participate')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportChampionsLeagueLotteryParticipateInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/app-user', () => {
    it('should filter app users', async () => {
      const response = await request(app)
        .post('/admin/report/app-user')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportAppUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('POST /admin/report/all-information-user', () => {
    it('should filter all user information', async () => {
      const response = await request(app)
        .post('/admin/report/all-information-user')
        .query({ pageable: { page: 0, size: 10 } })
        .send({ /* ReportAllInformationUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('GET /admin/profile/favorite/questions', () => {
    it('should return array of questions', async () => {
      const response = await request(app).get('/admin/profile/favorite/questions');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/profile/favorite/questions', () => {
    it('should create a new question', async () => {
      const response = await request(app)
        .post('/admin/profile/favorite/questions')
        .send({ /* QuestionInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on QuestionOutput
    });
  });

  describe('GET /admin/profile/about-us/faq', () => {
    it('should return array of FAQs', async () => {
      const response = await request(app).get('/admin/profile/about-us/faq');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/profile/about-us/faq', () => {
    it('should create a new FAQ', async () => {
      const response = await request(app)
        .post('/admin/profile/about-us/faq')
        .send({ /* FaqInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on FaqOutput
    });
  });

  describe('POST /admin/prize', () => {
    it('should create a new prize', async () => {
      const response = await request(app)
        .post('/admin/prize')
        .query({ lotteryId: 1 })
        .send({ /* PrizeInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on PrizeOutput
    });
  });

  describe('POST /admin/prize/save-lotterycode', () => {
    it('should save lottery code', async () => {
      const response = await request(app)
        .post('/admin/prize/save-lotterycode')
        .query({ prizeTitleListId: [1, 2], lotteryCode: 'ABC123' });

      expect(response.status).toBe(200);
      expect(typeof response.body).toBe('string');
    });
  });

  describe('POST /admin/prize/add-winners', () => {
    it('should add winners to prize', async () => {
      const response = await request(app)
        .post('/admin/prize/add-winners')
        .query({ lotteryId: 1 })
        .send({ /* PrizeWinnersInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /admin/other-lottery', () => {
    it('should return array of lotteries', async () => {
      const response = await request(app).get('/admin/other-lottery');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/other-lottery', () => {
    it('should create a new lottery', async () => {
      const response = await request(app)
        .post('/admin/other-lottery')
        .send({ /* LotteryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on LotteryOutput
    });
  });

  describe('POST /admin/other-lottery/files/upload', () => {
    it('should upload a lottery file', async () => {
      const response = await request(app)
        .post('/admin/other-lottery/files/upload')
        .query({ fileName: 'lottery.txt', lotteryId: 1 })
        .send({ file: 'binary data' })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('fileId'); // Adjust based on GroupFileUploadResponseDTO
    });
  });

  describe('POST /admin/other-lottery/do-lottery/:id', () => {
    it('should perform champions league lottery', async () => {
      const response = await request(app)
        .post('/admin/other-lottery/do-lottery/1');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/online-center/:categoryId', () => {
    it('should create online center', async () => {
      const response = await request(app)
        .post('/admin/online-center/1')
        .send({ /* OnlineCenterInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminOnlineCenterOutput2
    });
  });

  describe('GET /admin/online-center-category', () => {
    it('should return array of online center categories', async () => {
      const response = await request(app).get('/admin/online-center-category');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/online-center-category', () => {
    it('should create online center category', async () => {
      const response = await request(app)
        .post('/admin/online-center-category')
        .send({ /* OnlineCenterCategoryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on OnlineCenterCategoryOutput
    });
  });
});


// const request = require('supertest');
// const app = require('../app'); // Adjust path to your app

describe('Additional Admin and Member API Endpoints', () => {
  describe('GET /admin/notification', () => {
    it('should return paginated notifications', async () => {
      const response = await request(app)
        .get('/admin/notification')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('POST /admin/notification', () => {
    it('should send a notification', async () => {
      const response = await request(app)
        .post('/admin/notification')
        .send({ /* NotificationInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/notification/Category', () => {
    it('should load notifications by category', async () => {
      const response = await request(app)
        .post('/admin/notification/Category')
        .send({ input: { /* ReportNotificationInput mock data */ }, pageable: { page: 0, size: 10 } })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('GET /admin/missions', () => {
    it('should return array of missions', async () => {
      const response = await request(app).get('/admin/missions');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/missions', () => {
    it('should create a new mission', async () => {
      const response = await request(app)
        .post('/admin/missions')
        .send({ /* MissionInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on MissionOutput
    });
  });

  describe('GET /admin/lottery', () => {
    it('should return array of lotteries', async () => {
      const response = await request(app).get('/admin/lottery');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/lottery', () => {
    it('should create a new lottery', async () => {
      const response = await request(app)
        .post('/admin/lottery')
        .send({ /* LotteryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on LotteryOutput
    });
  });

  describe('POST /admin/lottery/blacklist/new/:lotteryId', () => {
    it('should create a lottery blacklist', async () => {
      const response = await request(app)
        .post('/admin/lottery/blacklist/new/1')
        .send({ /* LotteryBlackListInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/lottery/blacklist/del/:lotteryId', () => {
    it('should delete a lottery blacklist', async () => {
      const response = await request(app)
        .post('/admin/lottery/blacklist/del/1')
        .send({ /* LotteryBlackListInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-mall-shop/:categoryId', () => {
    it('should create an Iran Mall shop', async () => {
      const response = await request(app)
        .post('/admin/iran-mall-shop/1')
        .send({ /* IranMallShopInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranMallShopOutput
    });
  });

  describe('GET /admin/iran-mall-shop-category', () => {
    it('should return array of shop categories', async () => {
      const response = await request(app).get('/admin/iran-mall-shop-category');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-mall-shop-category', () => {
    it('should create a shop category', async () => {
      const response = await request(app)
        .post('/admin/iran-mall-shop-category')
        .send({ /* IranMallShopCategoryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranMallShopCategoryOutput
    });
  });

  describe('GET /admin/iran-mall-conference-hall', () => {
    it('should return array of conference halls', async () => {
      const response = await request(app).get('/admin/iran-mall-conference-hall');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-mall-conference-hall', () => {
    it('should create a conference hall', async () => {
      const response = await request(app)
        .post('/admin/iran-mall-conference-hall')
        .send({ /* IranMallConferenceHallInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranMallConferenceHallOutput
    });
  });

  describe('GET /admin/iran-mall-cinema', () => {
    it('should return array of cinemas', async () => {
      const response = await request(app).get('/admin/iran-mall-cinema');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-mall-cinema', () => {
    it('should create a cinema', async () => {
      const response = await request(app)
        .post('/admin/iran-mall-cinema')
        .send({ /* IranMallCinemaInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminIranMallCinemaOutput
    });
  });

  describe('GET /admin/iran-cards', () => {
    it('should return array of Iran cards', async () => {
      const response = await request(app).get('/admin/iran-cards');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-cards', () => {
    it('should create an Iran card', async () => {
      const response = await request(app)
        .post('/admin/iran-cards')
        .send({ /* IranCardRequestDTO mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranCardResponseDTO
    });
  });

  describe('POST /admin/iran-card-feature/:categoryId', () => {
    it('should create an Iran card feature', async () => {
      const response = await request(app)
        .post('/admin/iran-card-feature/1')
        .send({ /* IranCardFeatureInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranCardFeatureOutput
    });
  });

  describe('GET /admin/iran-card-category', () => {
    it('should return array of card categories', async () => {
      const response = await request(app).get('/admin/iran-card-category');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/iran-card-category', () => {
    it('should create a card category', async () => {
      const response = await request(app)
        .post('/admin/iran-card-category')
        .send({ /* IranCardCategoryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IranCardCategoryOutput
    });
  });

  describe('POST /admin/internal-online-center/:categoryId', () => {
    it('should create an internal online center', async () => {
      const response = await request(app)
        .post('/admin/internal-online-center/1')
        .send({ /* OnlineCenterInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminOnlineCenterOutput2
    });
  });

  describe('POST /admin/insurance/:categoryId', () => {
    it('should create an insurance', async () => {
      const response = await request(app)
        .post('/admin/insurance/1')
        .send({ /* InsuranceInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminInsuranceOutput
    });
  });

  describe('GET /admin/insurance-category', () => {
    it('should return array of insurance categories', async () => {
      const response = await request(app).get('/admin/insurance-category');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/insurance-category', () => {
    it('should create an insurance category', async () => {
      const response = await request(app)
        .post('/admin/insurance-category')
        .send({ /* InsuranceCategoryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on InsuranceCategoryOutput
    });
  });

  describe('GET /admin/increase-score-bank-article', () => {
    it('should return array of bank articles', async () => {
      const response = await request(app).get('/admin/increase-score-bank-article');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/increase-score-bank-article', () => {
    it('should create a bank article', async () => {
      const response = await request(app)
        .post('/admin/increase-score-bank-article')
        .send({ /* IncreaseScoreBankArticleInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on IncreaseScoreBankArticleOutput
    });
  });

  describe('GET /admin/customer-levels', () => {
    it('should return array of customer levels', async () => {
      const response = await request(app).get('/admin/customer-levels');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/customer-levels', () => {
    it('should create a customer level', async () => {
      const response = await request(app)
        .post('/admin/customer-levels')
        .send({ /* CustomerLevelRequestDTO mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on CustomerLevelResponseDTO
    });
  });

  describe('POST /admin/customer-levels-Indicator', () => {
    it('should create a customer level indicator', async () => {
      const response = await request(app)
        .post('/admin/customer-levels-Indicator')
        .send({ /* CustomerLevelIndicatorRequestDTO mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on CustomerLevelIndicatorResponseDTO
    });
  });

  describe('GET /admin/customer-groups', () => {
    it('should return array of customer groups', async () => {
      const response = await request(app).get('/admin/customer-groups');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/customer-groups', () => {
    it('should create a customer group', async () => {
      const response = await request(app)
        .post('/admin/customer-groups')
        .send({ /* GroupRequestDTO mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on GroupResponseDTO
    });
  });

  describe('POST /admin/customer-groups/files/upload', () => {
    it('should upload a customer group file', async () => {
      const response = await request(app)
        .post('/admin/customer-groups/files/upload')
        .query({ fileName: 'group.txt', groupId: 1 })
        .send({ file: 'binary data' })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('fileId'); // Adjust based on GroupFileUploadResponseDTO
    });
  });

  describe('POST /admin/comment/:id/reject', () => {
    it('should reject a comment', async () => {
      const response = await request(app)
        .post('/admin/comment/1/reject');

      expect(response.status).toBe(200);
    });
  });

  describe('POST /admin/comment/:id/confirm', () => {
    it('should confirm a comment', async () => {
      const response = await request(app)
        .post('/admin/comment/1/confirm');

      expect(response.status).toBe(200);
    });
  });

  describe('POST /admin/club-management', () => {
    it('should get all users for club management', async () => {
      const response = await request(app)
        .post('/admin/club-management')
        .send({ input: { /* AdminClubAynSearchInput mock data */ }, pageable: { page: 0, size: 10 } })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
    });
  });

  describe('GET /admin/charity', () => {
    it('should return array of charities', async () => {
      const response = await request(app).get('/admin/charity');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/charity', () => {
    it('should create a charity', async () => {
      const response = await request(app)
        .post('/admin/charity')
        .send({ /* CharityInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on CharityOutput
    });
  });

  describe('GET /admin/champions-league/lucky-wheel', () => {
    it('should return array of lucky wheels', async () => {
      const response = await request(app).get('/admin/champions-league/lucky-wheel');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/champions-league/lucky-wheel', () => {
    it('should create a lucky wheel', async () => {
      const response = await request(app)
        .post('/admin/champions-league/lucky-wheel')
        .send({ /* ChampionsLeagueLuckyWheelInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminChampionsLeagueLuckyWheelOutput
    });
  });

  describe('POST /admin/champions-league/lucky-wheel-item', () => {
    it('should create a lucky wheel item', async () => {
      const response = await request(app)
        .post('/admin/champions-league/lucky-wheel-item')
        .query({ luckyWheelId: 1 })
        .send({ /* ChampionsLeagueLuckyWheelItemInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminChampionsLeagueLuckyWheelItemOutput
    });
  });

  describe('GET /admin/champions-league/lottery', () => {
    it('should return array of lotteries', async () => {
      const response = await request(app).get('/admin/champions-league/lottery');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/champions-league/lottery', () => {
    it('should create a lottery', async () => {
      const response = await request(app)
        .post('/admin/champions-league/lottery')
        .send({ /* LotteryInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on LotteryOutput
    });
  });

  describe('POST /admin/champions-league/lottery/do-lottery/:id', () => {
    it('should perform a champions league lottery', async () => {
      const response = await request(app)
        .post('/admin/champions-league/lottery/do-lottery/1');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /admin/branches', () => {
    it('should return paginated branches', async () => {
      const response = await request(app)
        .get('/admin/branches')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('POST /admin/branches', () => {
    it('should create a branch', async () => {
      const response = await request(app)
        .post('/admin/branches')
        .send({ /* CreateBranchInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on CreateBranchOutput
    });
  });

  describe('GET /admin/banner', () => {
    it('should return array of banners', async () => {
      const response = await request(app).get('/admin/banner');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/banner', () => {
    it('should create a banner', async () => {
      const response = await request(app)
        .post('/admin/banner')
        .send({ /* BannerInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on BannerOutput
    });
  });

  describe('GET /admin/article', () => {
    it('should return an article by type', async () => {
      const response = await request(app)
        .get('/admin/article')
        .query({ type: 'ABOUT_US' });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on ArticleOutput
    });
  });

  describe('POST /admin/article', () => {
    it('should update an article', async () => {
      const response = await request(app)
        .post('/admin/article')
        .send({ /* ArticleInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on ArticleOutput
    });
  });

  describe('GET /admin/api/zone', () => {
    it('should return array of zones', async () => {
      const response = await request(app).get('/admin/api/zone');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /admin/api/zone', () => {
    it('should create a zone', async () => {
      const response = await request(app)
        .post('/admin/api/zone')
        .send({ /* ZoneInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on ZoneOutput
    });
  });

  describe('GET /admin/api/user-branch', () => {
    it('should return paginated user branches', async () => {
      const response = await request(app)
        .get('/admin/api/user-branch')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('POST /admin/api/user-branch', () => {
    it('should create a user branch', async () => {
      const response = await request(app)
        .post('/admin/api/user-branch')
        .send({ /* UserBranchInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on UserBranchOutput
    });
  });

  describe('GET /admin/admin-management', () => {
    it('should return paginated admins', async () => {
      const response = await request(app)
        .get('/admin/admin-management')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('POST /admin/admin-management', () => {
    it('should create an admin', async () => {
      const response = await request(app)
        .post('/admin/admin-management')
        .send({ /* AdminUserInput mock data */ })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on AdminUserOutput
    });
  });

  describe('GET /rules-engine/rule-configs/score-types/:scoreTypeId/rule-configs', () => {
    it('should return paginated rule configs', async () => {
      const response = await request(app)
        .get('/rules-engine/rule-configs/score-types/1/rule-configs')
        .query({ pageable: { page: 0, size: 10 } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('content');
      expect(response.body).toHaveProperty('pageable');
    });
  });

  describe('GET /public/check-version', () => {
    it('should check version', async () => {
      const response = await request(app)
        .get('/public/check-version')
        .query({ versionCode: 1 });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('version'); // Adjust based on CheckVersionOutput
    });
  });

  describe('GET /member/terminal-score', () => {
    it('should return terminal scores for user', async () => {
      const response = await request(app).get('/member/terminal-score');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on TerminalAccountOutput
    });
  });

  describe('GET /member/spend-score', () => {
    it('should return user spend score information', async () => {
      const response = await request(app).get('/member/spend-score');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on SpendScoreOutput
    });
  });

  describe('GET /member/spend-score/lotteries', () => {
    it('should return lottery tickets', async () => {
      const response = await request(app).get('/member/spend-score/lotteries');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on LotteryHomeOutput
    });
  });

  describe('GET /member/spend-score/isAllowed', () => {
    it('should check if user is allowed in lottery', async () => {
      const response = await request(app).get('/member/spend-score/isAllowed');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('allowed'); // Adjust based on LotteryIsAllowedOutput
    });
  });

  describe('GET /member/spend-score/charities', () => {
    it('should return array of charities', async () => {
      const response = await request(app).get('/member/spend-score/charities');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /member/spend-score/bank-services', () => {
    it('should return array of bank services', async () => {
      const response = await request(app).get('/member/spend-score/bank-services');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /member/samin/user-loan', () => {
    it('should return user loan information', async () => {
      const response = await request(app)
        .get('/member/samin/user-loan')
        .query({ input: { /* SaminLoanScoreTypeInput mock data */ } });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on SaminLoanScoreTypeOutput
    });
  });

  describe('GET /member/samin/samin-plans', () => {
    it('should return samin plans', async () => {
      const response = await request(app).get('/member/samin/samin-plans');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on SaminPlaneGroupOutput
    });
  });

  describe('GET /member/samin/facility-interest-rate', () => {
    it('should return facility interest rate', async () => {
      const response = await request(app)
        .get('/member/samin/facility-interest-rate')
        .query({ accountNumber: '123456' });

      expect(response.status).toBe(200);
      expect(typeof response.body).toBe('object');
    });
  });

  describe('GET /member/profile', () => {
    it('should return user profile', async () => {
      const response = await request(app).get('/member/profile');

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id'); // Adjust based on UserProfileOutput
    });
  });
});

describe('Member and Admin API Endpoints', () => {
  const baseURL = 'http://localhost:3000'; // Adjust to your API base URL
  const axiosInstance = axios.create({ baseURL });

  describe('GET /member/profile/my-score', () => {
    it('should return transaction score history', async () => {
      const response = await axiosInstance.get('/member/profile/my-score');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on MyScoreHistoryOutput
    });
  });

  describe('GET /member/profile/my-score/detail/:type', () => {
    it('should return detailed score history by transaction type', async () => {
      const response = await axiosInstance.get('/member/profile/my-score/detail/DEPOSIT');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ScoreReceiveDetailOutput
    });
  });

  describe('GET /member/profile/lottery', () => {
    it('should return lottery participations', async () => {
      const response = await axiosInstance.get('/member/profile/lottery');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/profile/favorite/questions', () => {
    it('should return favorite questions and answers', async () => {
      const response = await axiosInstance.get('/member/profile/favorite/questions');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/profile/communication', () => {
    it('should return communication details', async () => {
      const response = await axiosInstance.get('/member/profile/communication');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on CommunicationOutput
    });
  });

  describe('GET /member/profile/comments', () => {
    it('should return online center comments', async () => {
      const response = await axiosInstance.get('/member/profile/comments');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/profile/about-us/rules', () => {
    it('should return rules article', async () => {
      const response = await axiosInstance.get('/member/profile/about-us/rules');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ArticleOutput
    });
  });

  describe('GET /member/profile/about-us/faq', () => {
    it('should return FAQs', async () => {
      const response = await axiosInstance.get('/member/profile/about-us/faq');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/profile/about-us/about-us', () => {
    it('should return about us article', async () => {
      const response = await axiosInstance.get('/member/profile/about-us/about-us');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ArticleOutput
    });
  });

  describe('GET /member/online-center/:id/:internal', () => {
    it('should return online center by ID', async () => {
      const response = await axiosInstance.get('/member/online-center/1/true');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on OnlineCenterOutput
    });
  });

  describe('GET /member/online-center/internal-vip-category', () => {
    it('should return internal VIP online centers', async () => {
      const response = await axiosInstance.get('/member/online-center/internal-vip-category', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /member/online-center/category/:categoryId', () => {
    it('should return online centers by category ID', async () => {
      const response = await axiosInstance.get('/member/online-center/category/1', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /member/online-center-category', () => {
    it('should return all online center categories', async () => {
      const response = await axiosInstance.get('/member/online-center-category');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on OnlineCenterCategoryHomeOutput
    });
  });

  describe('GET /member/online-center-category/:id', () => {
    it('should return online center category by ID', async () => {
      const response = await axiosInstance.get('/member/online-center-category/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on OnlineCenterCategoryOutput
    });
  });

  describe('GET /member/notification', () => {
    it('should return notifications for customer', async () => {
      const response = await axiosInstance.get('/member/notification');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/my-history/tickets', () => {
    it('should return purchased tickets', async () => {
      const response = await axiosInstance.get('/member/my-history/tickets', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /member/my-history/spend', () => {
    it('should return spend scores', async () => {
      const response = await axiosInstance.get('/member/my-history/spend', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /member/my-history/earn-score', () => {
    it('should return earned scores', async () => {
      const response = await axiosInstance.get('/member/my-history/earn-score', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/missions/my-missions', () => {
    it('should return user missions', async () => {
      const response = await axiosInstance.get('/member/missions/my-missions', {
        params: { done: false }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/missions/all-missions', () => {
    it('should return all missions', async () => {
      const response = await axiosInstance.get('/member/missions/all-missions');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/lucky-wheel', () => {
    it('should return lucky wheels', async () => {
      const response = await axiosInstance.get('/member/lucky-wheel');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/lottery', () => {
    it('should return lotteries by type', async () => {
      const response = await axiosInstance.get('/member/lottery');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/lottery/score', () => {
    it('should return user lottery score', async () => {
      const response = await axiosInstance.get('/member/lottery/score');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /member/iran-mall-shop/:id', () => {
    it('should return Iran Mall shop by ID', async () => {
      const response = await axiosInstance.get('/member/iran-mall-shop/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranMallShopOutput
    });
  });

  describe('GET /member/iran-mall-shop/category/:categoryId', () => {
    it('should return Iran Mall shops by category ID', async () => {
      const response = await axiosInstance.get('/member/iran-mall-shop/category/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-mall-shop-category', () => {
    it('should return Iran Mall shop categories', async () => {
      const response = await axiosInstance.get('/member/iran-mall-shop-category');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-mall-shop-category/:id', () => {
    it('should return Iran Mall shop category by ID', async () => {
      const response = await axiosInstance.get('/member/iran-mall-shop-category/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranMallShopCategoryOutput
    });
  });

  describe('GET /member/iran-mall-conference-hall', () => {
    it('should return Iran Mall conference halls', async () => {
      const response = await axiosInstance.get('/member/iran-mall-conference-hall');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-mall-conference-hall/:id', () => {
    it('should return Iran Mall conference hall by ID', async () => {
      const response = await axiosInstance.get('/member/iran-mall-conference-hall/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranMallConferenceHallOutput
    });
  });

  describe('GET /member/iran-mall-cinema', () => {
    it('should return Iran Mall cinemas', async () => {
      const response = await axiosInstance.get('/member/iran-mall-cinema');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-mall-cinema/:id', () => {
    it('should return Iran Mall cinema by ID', async () => {
      const response = await axiosInstance.get('/member/iran-mall-cinema/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranMallCinemaOutput
    });
  });

  describe('GET /member/iran-mall-cinema/iran-tic', () => {
    it('should return Iran Mall cinema IranTic', async () => {
      const response = await axiosInstance.get('/member/iran-mall-cinema/iran-tic');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranMallCinemaOutput
    });
  });

  describe('GET /member/iran-card-home', () => {
    it('should return Iran Card home', async () => {
      const response = await axiosInstance.get('/member/iran-card-home');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranCardHomeOutput
    });
  });

  describe('GET /member/iran-card-feature/:id', () => {
    it('should return Iran Card feature by ID', async () => {
      const response = await axiosInstance.get('/member/iran-card-feature/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranCardFeatureOutput
    });
  });

  describe('GET /member/iran-card-feature/category/:categoryId', () => {
    it('should return Iran Card features by category ID', async () => {
      const response = await axiosInstance.get('/member/iran-card-feature/category/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-card-category', () => {
    it('should return Iran Card categories', async () => {
      const response = await axiosInstance.get('/member/iran-card-category');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/iran-card-category/:id', () => {
    it('should return Iran Card category by ID', async () => {
      const response = await axiosInstance.get('/member/iran-card-category/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranCardCategoryOutput
    });
  });

  describe('GET /member/insurance/:id', () => {
    it('should return insurance by ID', async () => {
      const response = await axiosInstance.get('/member/insurance/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on InsuranceOutput
    });
  });

  describe('GET /member/insurance/category/:categoryId', () => {
    it('should return insurance by category ID', async () => {
      const response = await axiosInstance.get('/member/insurance/category/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on InsuranceOutput
    });
  });

  describe('GET /member/insurance-category', () => {
    it('should return insurance categories', async () => {
      const response = await axiosInstance.get('/member/insurance-category');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/insurance-category/:id', () => {
    it('should return insurance category by ID', async () => {
      const response = await axiosInstance.get('/member/insurance-category/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on InsuranceCategoryOutput
    });
  });

  describe('GET /member/increase-score-bank-article', () => {
    it('should return bank articles', async () => {
      const response = await axiosInstance.get('/member/increase-score-bank-article');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/increase-score-bank-article/:id', () => {
    it('should return bank article by ID', async () => {
      const response = await axiosInstance.get('/member/increase-score-bank-article/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IncreaseScoreBankArticleOutput
    });
  });

  describe('GET /member/home', () => {
    it('should return member home', async () => {
      const response = await axiosInstance.get('/member/home');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on HomeOutput
    });
  });

  describe('GET /member/file/:fileId', () => {
    it('should return file by ID', async () => {
      const response = await axiosInstance.get('/member/file/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on FileOutput
    });
  });

  describe('GET /member/file/resource/:fileId', () => {
    it('should return file resource by ID', async () => {
      const response = await axiosInstance.get('/member/file/resource/1');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /member/directory/:directoryId', () => {
    it('should return directory by ID', async () => {
      const response = await axiosInstance.get('/member/directory/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on DirectoryOutput
    });
  });

  describe('GET /member/champions-league', () => {
    it('should return champions league home', async () => {
      const response = await axiosInstance.get('/member/champions-league', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ChampionsLeagueHomeOutput
    });
  });

  describe('GET /member/champions-league/user-ranking-country', () => {
    it('should return user ranking in country', async () => {
      const response = await axiosInstance.get('/member/champions-league/user-ranking-country');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /member/champions-league/ranking-country', () => {
    it('should return country rankings', async () => {
      const response = await axiosInstance.get('/member/champions-league/ranking-country', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ChampionsLeagueUserRankOutput
    });
  });

  describe('GET /member/champions-league/ranking-branch', () => {
    it('should return branch rankings', async () => {
      const response = await axiosInstance.get('/member/champions-league/ranking-branch', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ChampionsLeagueUserRankOutput
    });
  });

  describe('GET /member/champions-league/lottery', () => {
    it('should return champions league lotteries', async () => {
      const response = await axiosInstance.get('/member/champions-league/lottery');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/champions-league/lottery/:id', () => {
    it('should return champions league lottery by ID', async () => {
      const response = await axiosInstance.get('/member/champions-league/lottery/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on LotteryOutput
    });
  });

  describe('GET /member/champions-league/badge-detail', () => {
    it('should return badge details', async () => {
      const response = await axiosInstance.get('/member/champions-league/badge-detail');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ChampionsLeagueBadgeDetailOutput
    });
  });

  describe('GET /member/banner', () => {
    it('should return banners by type', async () => {
      const response = await axiosInstance.get('/member/banner', {
        params: { type: 'HOME' }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /member/bank-services/:id', () => {
    it('should return bank service by ID', async () => {
      const response = await axiosInstance.get('/member/bank-services/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on SpendScoreBankArticleOutput
    });
  });

  describe('GET /auth/get-version', () => {
    it('should return version', async () => {
      const response = await axiosInstance.get('/auth/get-version');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /auth/cas', () => {
    it('should authenticate with CAS', async () => {
      const response = await axiosInstance.get('/auth/cas', {
        params: { code: 'test-code' }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on LoginOutput
    });
  });

  describe('GET /auth/cas/login', () => {
    it('should login with CAS', async () => {
      const response = await axiosInstance.get('/auth/cas/login');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on CASLoginOutput
    });
  });

  describe('GET /auth/basic-info/user', () => {
    it('should return club info', async () => {
      const response = await axiosInstance.get('/auth/basic-info/user');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ClubInfo
    });
  });

  describe('GET /auth/basic-info/about-us/faq', () => {
    it('should return FAQs', async () => {
      const response = await axiosInstance.get('/auth/basic-info/about-us/faq');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/voting/:id/stats', () => {
    it('should return voting stats', async () => {
      const response = await axiosInstance.get('/admin/voting/1/stats');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on VotingStatsOutput
    });
  });

  describe('GET /admin/user', () => {
    it('should return paginated users', async () => {
      const response = await axiosInstance.get('/admin/user', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/user-settings', () => {
    it('should return user details', async () => {
      const response = await axiosInstance.get('/admin/user-settings', {
        params: { cif: 123 }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on UserManagementOutput
    });
  });

  describe('GET /admin/user-settings/:id/purchases', () => {
    it('should return user purchases', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/purchases', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/user-settings/:id/mission', () => {
    it('should return user missions', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/mission');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/:id/lotteries', () => {
    it('should return user lottery participations', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/lotteries');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/:id/login-logs', () => {
    it('should return user login logs', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/login-logs');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/:id/favorites', () => {
    it('should return user favorites', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/favorites');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/:id/details', () => {
    it('should return user profile details', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/details');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on UserProfileDetailsOutput
    });
  });

  describe('GET /admin/user-settings/:id/comments', () => {
    it('should return user comments', async () => {
      const response = await axiosInstance.get('/admin/user-settings/1/comments');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/:customerId/iran-card', () => {
    it('should return user Iran Card', async () => {
      const response = await axiosInstance.get('/admin/user-settings/123/iran-card');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on IranCardOutput
    });
  });

  describe('GET /admin/user-settings/:cif/details-cif', () => {
    it('should return user details by CIF', async () => {
      const response = await axiosInstance.get('/admin/user-settings/123/details-cif');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on UserProfileDetailsOutput
    });
  });

  describe('GET /admin/user-settings/user-terminals/:id', () => {
    it('should return user terminals', async () => {
      const response = await axiosInstance.get('/admin/user-settings/user-terminals/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/user-accounts/:id', () => {
    it('should return user accounts', async () => {
      const response = await axiosInstance.get('/admin/user-settings/user-accounts/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/user-settings/score-history', () => {
    it('should return user score history', async () => {
      const response = await axiosInstance.get('/admin/user-settings/score-history', {
        params: { cif: '123' }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on MyScoreHistoryOutput
    });
  });

  describe('GET /admin/user-settings/score-history/:type', () => {
    it('should return score details by transaction type', async () => {
      const response = await axiosInstance.get('/admin/user-settings/score-history/DEPOSIT', {
        params: { cif: '123' }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on ScoreReceiveDetailOutput
    });
  });

  describe('GET /admin/score/ranking/country', () => {
    it('should return country user rankings', async () => {
      const response = await axiosInstance.get('/admin/score/ranking/country', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/score/ranking/branch', () => {
    it('should return branch user rankings', async () => {
      const response = await axiosInstance.get('/admin/score/ranking/branch', {
        params: { pageable: { page: 0, size: 10 }, openBranch: 1 }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/samin/user-accounts', () => {
    it('should return user accounts', async () => {
      const response = await axiosInstance.get('/admin/samin/user-accounts', {
        params: { customerId: '123' }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/samin/account-loan', () => {
    it('should return Samin loans with score', async () => {
      const response = await axiosInstance.get('/admin/samin/account-loan', {
        params: { input: { /* AdminSaminAccountLoanInput mock data */ } }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/rule/offline/files', () => {
    it('should return offline rule files', async () => {
      const response = await axiosInstance.get('/admin/rule/offline/files', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/rule/offline/files/:id', () => {
    it('should return offline rule file by ID', async () => {
      const response = await axiosInstance.get('/admin/rule/offline/files/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/rule/offline/files/sample', () => {
    it('should return sample Excel file', async () => {
      const response = await axiosInstance.get('/admin/rule/offline/files/sample');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/rule/offline/files/download/:id', () => {
    it('should download offline rule file', async () => {
      const response = await axiosInstance.get('/admin/rule/offline/files/download/1');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /admin/purchase', () => {
    it('should return users by purchase type', async () => {
      const response = await axiosInstance.get('/admin/purchase', {
        params: { type: 'ONLINE_CENTER', pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/profile/favorite/questions/:id/stats', () => {
    it('should return question stats', async () => {
      const response = await axiosInstance.get('/admin/profile/favorite/questions/1/stats');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id'); // Adjust based on QuestionStatsOutput
    });
  });

  describe('GET /admin/prize/lottery/:lotteryId', () => {
    it('should return lottery prizes', async () => {
      const response = await axiosInstance.get('/admin/prize/lottery/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/prize/file/resource/:type', () => {
    it('should return prize file resource', async () => {
      const response = await axiosInstance.get('/admin/prize/file/resource/HOME');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /admin/prize/check-done-lottery/:lotteryId', () => {
    it('should check done lottery', async () => {
      const response = await axiosInstance.get('/admin/prize/check-done-lottery/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/other-lottery/files', () => {
    it('should generate Excel for other lottery', async () => {
      const response = await axiosInstance.get('/admin/other-lottery/files');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/other-lottery/files/:id', () => {
    it('should return other lottery files', async () => {
      const response = await axiosInstance.get('/admin/other-lottery/files/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/other-lottery/files/download/:id', () => {
    it('should download other lottery file', async () => {
      const response = await axiosInstance.get('/admin/other-lottery/files/download/1');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /admin/online-center', () => {
    it('should return online centers by display order', async () => {
      const response = await axiosInstance.get('/admin/online-center', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });
});


const axios = require('axios');

describe('Admin API Endpoints', () => {
  const baseURL = 'http://localhost:3000'; // Adjust to your API base URL
  const axiosInstance = axios.create({ baseURL });

  describe('GET /admin/online-center/:id/purchase-codes', () => {
    it('should return number of remaining purchase codes', async () => {
      const response = await axiosInstance.get('/admin/online-center/1/purchase-codes');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /admin/online-center/search', () => {
    it('should return online centers by user level and title', async () => {
      const response = await axiosInstance.get('/admin/online-center/search', {
        params: {
          level: 'VIP',
          title: 'Test',
          purchaseCodesCount: 10,
          expireDate: '2025-12-31T23:59:59',
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/online-center-ticket-purchase', () => {
    it('should return buyers by online center ID', async () => {
      const response = await axiosInstance.get('/admin/online-center-ticket-purchase', {
        params: {
          onlineCenterId: 1,
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/notification/:id', () => {
    it('should return notification by ID', async () => {
      const response = await axiosInstance.get('/admin/notification/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/notification/admin-notification/fetchAll', () => {
    it('should return all unread admin notifications', async () => {
      const response = await axiosInstance.get('/admin/notification/admin-notification/fetchAll', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/notification/admin-notification/count', () => {
    it('should return count of unread admin notifications', async () => {
      const response = await axiosInstance.get('/admin/notification/admin-notification/count');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /admin/notification/Category/:title/:date', () => {
    it('should return notifications by category and date', async () => {
      const response = await axiosInstance.get('/admin/notification/Category/Test/2025-01-01T00:00:00', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/missions/meta-data', () => {
    it('should return missions metadata', async () => {
      const response = await axiosInstance.get('/admin/missions/meta-data');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/lottery/startLottery/:id', () => {
    it('should return lottery start details by ID', async () => {
      const response = await axiosInstance.get('/admin/lottery/startLottery/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/lottery/blacklist/:lotteryId', () => {
    it('should return lottery blacklist', async () => {
      const response = await axiosInstance.get('/admin/lottery/blacklist/1', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/lottery/all', () => {
    it('should return all lotteries', async () => {
      const response = await axiosInstance.get('/admin/lottery/all');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/lottery-participate/participants', () => {
    it('should return user lottery participants', async () => {
      const response = await axiosInstance.get('/admin/lottery-participate/participants', {
        params: { lotteryId: 1 }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/lottery-participate/chances', () => {
    it('should return user lottery chances', async () => {
      const response = await axiosInstance.get('/admin/lottery-participate/chances', {
        params: { lotteryId: 1 }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/iran-mall-shop', () => {
    it('should return all Iran Mall shops', async () => {
      const response = await axiosInstance.get('/admin/iran-mall-shop');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/iran-mall-cinema/:id/purchase-codes', () => {
    it('should return number of remaining cinema purchase codes', async () => {
      const response = await axiosInstance.get('/admin/iran-mall-cinema/1/purchase-codes');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /admin/iran-mall-cinema-ticket-purchase', () => {
    it('should return buyers by cinema ID', async () => {
      const response = await axiosInstance.get('/admin/iran-mall-cinema-ticket-purchase', {
        params: {
          iranMallCinemaId: 1,
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/iran-card-feature', () => {
    it('should return all Iran Card features', async () => {
      const response = await axiosInstance.get('/admin/iran-card-feature');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/internal-online-center', () => {
    it('should return internal online centers by display order', async () => {
      const response = await axiosInstance.get('/admin/internal-online-center', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/internal-online-center/:id/purchase-codes', () => {
    it('should return number of remaining internal purchase codes', async () => {
      const response = await axiosInstance.get('/admin/internal-online-center/1/purchase-codes');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /admin/internal-online-center/search', () => {
    it('should return internal online centers by user level and title', async () => {
      const response = await axiosInstance.get('/admin/internal-online-center/search', {
        params: {
          level: 'VIP',
          title: 'Test',
          purchaseCodesCount: 10,
          expireDate: '2025-12-31T23:59:59',
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/insurance', () => {
    it('should return all insurances', async () => {
      const response = await axiosInstance.get('/admin/insurance');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/insurance-ticket-purchase', () => {
    it('should return buyers by insurance ID', async () => {
      const response = await axiosInstance.get('/admin/insurance-ticket-purchase', {
        params: {
          insuranceId: 1,
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/customer-levels/user/:id', () => {
    it('should return customer level by user ID', async () => {
      const response = await axiosInstance.get('/admin/customer-levels/user/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/customer-levels/user-history', () => {
    it('should return customer level history', async () => {
      const response = await axiosInstance.get('/admin/customer-levels/user-history', {
        params: { customerId: '123' }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-levels-Indicator/type/fetchAll', () => {
    it('should return all customer level indicator types', async () => {
      const response = await axiosInstance.get('/admin/customer-levels-Indicator/type/fetchAll');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-levels-Indicator/fetchAll', () => {
    it('should return all customer level indicators', async () => {
      const response = await axiosInstance.get('/admin/customer-levels-Indicator/fetchAll', {
        params: {
          customerLevelId: 1,
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-groups/get-user', () => {
    it('should return customer group history', async () => {
      const response = await axiosInstance.get('/admin/customer-groups/get-user', {
        params: { customerId: '123' }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-groups/files', () => {
    it('should generate customer group Excel file', async () => {
      const response = await axiosInstance.get('/admin/customer-groups/files');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-groups/files/:id', () => {
    it('should return customer group files', async () => {
      const response = await axiosInstance.get('/admin/customer-groups/files/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/customer-groups/files/download/:id', () => {
    it('should download customer group file', async () => {
      const response = await axiosInstance.get('/admin/customer-groups/files/download/1');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('string');
    });
  });

  describe('GET /admin/comment', () => {
    it('should return unconfirmed comments', async () => {
      const response = await axiosInstance.get('/admin/comment', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/comment/count', () => {
    it('should return count of unconfirmed comments', async () => {
      const response = await axiosInstance.get('/admin/comment/count');
      expect(response.status).toBe(200);
      expect(typeof response.data).toBe('number');
    });
  });

  describe('GET /admin/charity/search', () => {
    it('should return charities by user level and title', async () => {
      const response = await axiosInstance.get('/admin/charity/search', {
        params: {
          level: 'VIP',
          title: 'Test'
        }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/charity-donate-score', () => {
    it('should return donors by charity ID', async () => {
      const response = await axiosInstance.get('/admin/charity-donate-score', {
        params: {
          charityId: 1,
          pageable: { page: 0, size: 10 }
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/champions-league/ranking/country', () => {
    it('should return country rankings', async () => {
      const response = await axiosInstance.get('/admin/champions-league/ranking/country', {
        params: {
          pageable: { page: 0, size: 10 },
          customerId: '123',
          name: 'John',
          familyName: 'Doe',
          minGem: 100,
          maxGem: 1000
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/champions-league/ranking/branch', () => {
    it('should return branch rankings', async () => {
      const response = await axiosInstance.get('/admin/champions-league/ranking/branch', {
        params: {
          pageable: { page: 0, size: 10 },
          openBranch: 1,
          customerId: '123',
          name: 'John',
          familyName: 'Doe',
          minGem: 100,
          maxGem: 1000
        }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('GET /admin/champions-league/lucky-wheel-participate/:luckyWheelId', () => {
    it('should return lucky wheel winners', async () => {
      const response = await axiosInstance.get('/admin/champions-league/lucky-wheel-participate/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/champions-league/lucky-wheel-participate/item/:prizeId', () => {
    it('should return winners for lucky wheel prize', async () => {
      const response = await axiosInstance.get('/admin/champions-league/lucky-wheel-participate/item/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/champions-league/lucky-wheel-item/lucky-wheel/:luckyWheelId', () => {
    it('should return lucky wheel items', async () => {
      const response = await axiosInstance.get('/admin/champions-league/lucky-wheel-item/lucky-wheel/1');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/champions-league/lottery-participate/participants', () => {
    it('should return champions league lottery participants', async () => {
      const response = await axiosInstance.get('/admin/champions-league/lottery-participate/participants', {
        params: { lotteryId: 1 }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/champions-league/lottery-participate/chances', () => {
    it('should return champions league lottery chances', async () => {
      const response = await axiosInstance.get('/admin/champions-league/lottery-participate/chances', {
        params: { lotteryId: 1 }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/branches/:branchId', () => {
    it('should return branch by ID', async () => {
      const response = await axiosInstance.get('/admin/branches/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/banner/type', () => {
    it('should return banners by type', async () => {
      const response = await axiosInstance.get('/admin/banner/type', {
        params: { type: 'HOME' }
      });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });
  });

  describe('GET /admin/api/user-branch/:userBranchId', () => {
    it('should return user branch by ID', async () => {
      const response = await axiosInstance.get('/admin/api/user-branch/1');
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
    });
  });

  describe('GET /admin/api/user-branch/branch/:branchId', () => {
    it('should return user branches by branch ID', async () => {
      const response = await axiosInstance.get('/admin/api/user-branch/branch/1', {
        params: { pageable: { page: 0, size: 10 } }
      });
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('content');
    });
  });

  describe('DELETE /admin/score/manual/:hisDate', () => {
    it('should delete manual score update by date', async () => {
      const response = await axiosInstance.delete('/admin/score/manual/2025-01-01');
      expect(response.status).toBe(200);
    });
  });

  describe('GET /admin/prize/file/:lotteryId', () => {
    it('should download prize file resource', async () => {
      const response = await axiosInstance.get('/admin/prize/file/1');
      expect(response.status).toBe(200);
    });
  });
});



