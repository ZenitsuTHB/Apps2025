#pragma once 

#include <map>
#include <iostream>
#include <string>
#include "ASpell.hpp"
#include "ATarget.hpp"
#define COUT std::cout 
#define STDSTR std::string

class ASpell;
class ATarget;

class Warlock {

	private:
		STDSTR	_name;
		STDSTR	_title;
		std::map<STDSTR, ASpell*> _bookSpell;

		Warlock();
		Warlock(const Warlock&);
		Warlock & operator = (const Warlock&);
	public:
		~Warlock();
		Warlock(STDSTR name, STDSTR title);

		const STDSTR& getName() const;
		const STDSTR& getTitle() const;
		
		void introduce() const;
		void setTitle(const STDSTR& title);

		void learnSpell(ASpell * learner);
		void forgetSpell(const STDSTR& spellName);
		void launchSpell(const STDSTR& spellName, const ATarget&  target);
};
